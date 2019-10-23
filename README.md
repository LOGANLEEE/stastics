£27/08/19 fit
============================
fatal: Unable to create '/Users/loganlee/project/portfolio/project/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue. 
============================
I dont know why is this error has happeend. but solution of it was remove .git/index.lock file.
then re-add then commit. 

£15/08/19
I have reached SSL Certification error when server tried to crawl https protocol website.
Thus i impletemented SSL Certification for this server with "ssl-root-cas/latest" lib.
Generating key and pem with SSL function then running server as https protocol as well.
Resultingly, it works well now.

£28/08/19
i've faced charset problem when i try to crawl site which is "Etoland".
they're using EUC-KR charset instead of UTF-8.
Thus any korean that i crawled was broken.
i have to convert or enode when i make a request.
Resolve - used Iconv.decode() function, decode as EUC-KR charset and set ResponseType as 'ArrayBuffer' of Axios.

£03/09/19
i've crawled hot posts on website but they not always provide enough amount of Info to be crawled.
Thus crawl surface first and collect it then get inside one step to get full detail of Info.

£09/09/19
problem occurred while implemeting cersoring result of crawlig logic.
have to apply async to whole of this logic but it doesn't work now.

£13/09/19 
Trigerring Crawler isn't have to be async.
cuz it will be operated as Batch.

£16/09/19
Crawling process have to be operated in every cetrain time which is Batch process.
why did i try to get it that? no reason.

£25/09/19
1.for Sorter, need to make a jsonArray for each site's selectors of items(id, title, etc....).!
2. do it even need each schemas for sites?

£30/09/19
1. I need to run how to delete all data of tables.

£08/10/19
crawling function by axios didn't work in preProcessor.
the reasone was 
/////
let result = '';
 isNeedEncodingConfig ? result = iconv.decode(res.data, 'euc-kr') : res.data;
////

i dont know why but i can sure that alvis operator didnt work properly
no fukcing error code. jesus.

£21/10/19
after preProcessor, if there is any lefr prePost data then operate preProcessor again.
EUC-KR for humorUniv
well can't make a reqest to HumorUniv. i dont fukcing what is wrong with that.

