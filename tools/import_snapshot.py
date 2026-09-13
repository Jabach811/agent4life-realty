from bs4 import BeautifulSoup
from pathlib import Path
from urllib.request import urlopen,Request
from concurrent.futures import ThreadPoolExecutor
import json,re
root=Path('implementation');records=[];jobs=[]
for source,status in [('properties','active'),('sold','sold')]:
 soup=BeautifulSoup(Path('reference/legacy-site/pages/'+source+'.html').read_text(encoding='utf-8'),'html.parser')
 seen=set()
 for el in soup.select('.ihf-grid-result[data-ihf-listing-number]'):
  mid=el['data-ihf-listing-number']
  if mid in seen:continue
  seen.add(mid)
  addr=el['data-ihf-listing-address'];parts=addr.split(', ');street=parts[0];city=parts[1];slug=re.sub('[^a-z0-9]+','-',street.lower()).strip('-')
  vals=[x.get_text(' ',strip=True) for x in el.select('.ihf-grid-result-basic-info-container b')]
  image=el.select_one('[data-ihf-main-source]');imgsrc=image['data-ihf-main-source'] if image else None
  price=int(float(el.get('data-ihf-listing-price',0)))
  if status=='sold':
   m=re.search(r'SOLD:\s*\$([\d,]+)',el.get_text(' ',strip=True),re.I)
   if m:price=int(m[1].replace(',',''))
  office=el.select_one('.ihf-grid-result-attribution');office=office.get_text(' ',strip=True) if office else ''
  office=office.split('Selling Office:')[0].replace('Listing Office:','').strip()
  tour=el.select_one('.ihf-grid-result-virtual-tour a')
  r=dict(id=mid,slug=slug,address=street,city=city,state='CA',zip=parts[2].split()[-1],status=status,price=price,beds=int(vals[0]),baths=vals[1].replace(' | ', ' full + ').strip()+' half' if '|' in vals[1] else vals[1],sqft=int(vals[2].replace(',','')),listingOffice=office,images=['assets/img/property-'+mid+'.jpg'] if imgsrc else [],description='',featured=mid in ['226098466','226028518','226106637'],sourceDate='2026-09-13',legacyPath=el.select_one('.ihf-grid-result-address-container a')['href'].replace('https://agent4liferealty.com',''),tourUrl=tour['href'] if tour else '')
  records.append(r)
  if imgsrc:jobs.append((imgsrc,root/r['images'][0],r))
def download(job):
 url,path,r=job
 try:
  data=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=25).read();path.write_bytes(data);return r['address']+' photo saved'
 except Exception as e:r['images']=[];return r['address']+' photo unavailable: '+str(e)
with ThreadPoolExecutor(max_workers=6) as pool:
 for result in pool.map(download,jobs):print(result)
(root/'data/listings.json').write_text(json.dumps({'updatedAt':'2026-09-13','sourceNote':'Listing information captured from the previous website on September 13, 2026. Confirm availability and details with Emad.','listings':records},indent=2),encoding='utf-8')
print('Records',len(records))
