from pathlib import Path
import shutil,json,subprocess,sys
base=Path('qa/update-fixture');base.mkdir(exist_ok=True)
for name in ['tools','implementation/data','backups/approved-homepage','research','plans']:(base/name).mkdir(parents=True,exist_ok=True)
for name in ['tools/build_site.py','backups/approved-homepage/index.html','research/page-inventory.json']:shutil.copyfile(name,base/name)
d=json.loads(Path('implementation/data/listings.json').read_text(encoding='utf-8'));d['listings']=d['listings'][:1]
for p in d['listings']:p['images']=[]
path=base/'implementation/data/listings.json'
def build():
 path.write_text(json.dumps(d));subprocess.run([sys.executable,str(base/'tools/build_site.py')],check=True,capture_output=True)
build();old=d['listings'][0]['slug'];d['listings'][0]['slug']='updated-test-property';d['listings'][0]['address']='Test <script>alert(1)</script>';build()
assert 'url=/listings/updated-test-property/' in (base/'implementation/listings'/old/'index.html').read_text(encoding='utf-8')
assert '&lt;script&gt;' in (base/'implementation/listings/updated-test-property/index.html').read_text(encoding='utf-8')
d['listings']=[];build();assert 'url=/listings/' in (base/'implementation/listings/updated-test-property/index.html').read_text(encoding='utf-8')
assert 'updated-test-property' not in (base/'implementation/sitemap.xml').read_text(encoding='utf-8')
print('Isolated update fixture passed: rename redirects, escaped text, removal redirects, sitemap update, empty collection.')

