const Etoland = {
    title: '#mw_basic > table:nth-child(17) > tbody > tr:nth-child(2) > td > h1',
    author: '#mw_basic > table:nth-child(17) > tbody > tr:nth-child(4) > td > span > a:nth-child(2) > span',
    date: '#mw_basic > table:nth-child(17) > tbody > tr:nth-child(4) > td > span > span.mw_basic_view_datetime',
    hitCount: '#mw_basic > table:nth-child(17) > tbody > tr:nth-child(4) > td > span > span.mw_basic_view_hit',
};

const Clien = {
    title: '#div_content > div.post_title.symph_row > h3 > span',
    author: '#div_content > div.post_info > div.post_contact > span > span > span',
    imgAuthor: '#div_content > div.post_info > div.post_contact > span > span > img',
    date: '#div_content > div.post_view > div.post_author > span:nth-child(1)',
    hitCount: '#div_content > div.post_info > div.view_info > span.view_count > strong',
};

const Bobae = {
    title: '#print_area > div.writerProfile > dl > dt > strong',
    author: '#print_area > div.writerProfile > dl > dd.proflieInfo > ul > li:nth-child(1) > span.proCont > a',
    date: '#print_area > div.writerProfile > dl > dt > span',
    hitCount: '#print_area > div.writerProfile > dl > dt > span > em:nth-child(1)',
};

const Bullpen = {
    title: '#container > div.contents > div.left_cont > div.titles',
    author: '#container > div.contents > div.left_cont > ul > li > div.text > div.text_left > div.text1 > span',
    date: '#container > div.contents > div.left_cont > ul > li > div.text > div.text_right > div.text3 > span.val',
    hitCount: '#container > div.contents > div.left_cont > ul > li > div.text > div.text_left > div.text2 > span:nth-child(4)',
};

const SLR = {
    title: '#bbs_view_head > tbody > tr.first_part > td',
    author: '#bbs_view_head > tbody > tr:nth-child(2) > td.nick > span',
    date: '#bbs_view_head > tbody > tr:nth-child(2) > td.date.bbs_ct_small > span',
    hitCount: '#bbs_view_head > tbody > tr:nth-child(2) > td.click.bbs_ct_small',
};

const TodayHumor = {
    title: '#containerInner > div.viewSubjectDiv > div',
    author: '#viewPageWriterNameSpan > a > b',
    date: '#containerInner > div.writerInfoContainer > div.writerInfoContents > div:nth-child(8)',
    hitCount: '#containerInner > div.writerInfoContainer > div.writerInfoContents > div:nth-child(4)',
};

const Cook = {
    title: '#column2 > h4',
    author: '#readHead > div.readLeft > strong > a',
    date: '#readHead > div.readRight',
    hitCount: '#readHead > div.readLeft',
};

const Gasengi = {
    title: '#view_conta > table > tbody > tr > td > div:nth-child(2) > table > tbody > tr > td:nth-child(1) > div',
    author: '#view_conta > table > tbody > tr > td > table:nth-child(4) > tbody > tr:nth-child(1) > td > div:nth-child(1) > a > span',
    date: '#view_conta > table > tbody > tr > td > div:nth-child(1) > div:nth-child(1) > span',
    hitCount: '#view_conta > table > tbody > tr > td > table:nth-child(4) > tbody > tr:nth-child(1) > td > div:nth-child(2)',
};
const RuliWeb = {
    title: '#board_read > div > div.board_main > div.board_main_top > div.user_view > div:nth-child(1) > h4 > span',
    author: '#board_read > div > div.board_main > div.board_main_top > div.user_view > div:nth-child(4) > div.col.user_info_wrapper > div > p:nth-child(1) > strong',
    date: '#board_read > div > div.board_main > div.board_main_top > div.user_view > div:nth-child(4) > div.col.user_info_wrapper > div > p:nth-child(6) > span.regdate',
    hitCount: '#board_read > div > div.board_main > div.board_main_top > div.user_view > div:nth-child(4) > div.col.user_info_wrapper > div > p:nth-child(5)',
};
const PpomPu = {
    title: 'body > div > div.contents > div.container > div > table:nth-child(9) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5) > font.view_title2',
    author: 'body > div > div.contents > div.container > div > table:nth-child(9) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5) > span:nth-child(5) > a > font',
    date: 'body > div > div.contents > div.container > div > table:nth-child(9) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5)',
    hitCount: 'body > div > div.contents > div.container > div > table:nth-child(9) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5)',
};
const Instiz = {
    title: '#nowsubject > a',
    author: '',
    hitCount: 'body > table > tbody > tr:nth-child(1) > td > table:nth-child(6) > tbody > tr:nth-child(2) > td > div.tb_left',
    hitCount2: 'body > table > tbody > tr:nth-child(1) > td > table:nth-child(7) > tbody > tr:nth-child(2) > td > div.tb_left',
};
const FmKorea = {
    title: '#bd_capture > div.rd_hd.clear > div.board.clear > div.top_area.ngeb > h1 > span.np_18px_span',
    author: '#bd_capture > div.rd_hd.clear > div.board.clear > div.btm_area.clear > div:nth-child(1) > a',
    date: '#bd_capture > div.rd_hd.clear > div.board.clear > div.top_area.ngeb > span',
    hitCount: '#bd_capture > div.rd_hd.clear > div.board.clear > div.btm_area.clear > div.side.fr > span:nth-child(1) > b',
};
const TheQoo = {
    title: '#content > div > div.bd_load_target.bd.clear.hover_effect > div.rd.rd_nav_style2.clear > div.rd_hd.clear > div.theqoo_document_header > span > span',
    author: '#content > div > div.bd_load_target.bd.clear.hover_effect > div.rd.rd_nav_style2.clear > div.rd_hd.clear > div.board.clear > div > div:nth-child(1)',
    date: '#content > div > div.bd_load_target.bd.clear.hover_effect > div.rd.rd_nav_style2.clear > div.rd_hd.clear > div.board.clear > div > div.side.fr > span',
    hitCount: '#content > div > div.bd_load_target.bd.clear.hover_effect > div.rd.rd_nav_style2.clear > div.rd_hd.clear > div.theqoo_document_header > div',
};
const Ilbe = {
    title: '',
    author: '',
    date: '',
    hitCount: '',
};

const HumorUniv = {
    title: '',
    author: '',
    date: '',
    hitCount: '',
};

const DogDrip = {
    title: '#main > div > div.eq.section.secontent.background-color-content > div > div.ed.article-wrapper.inner-container > div.ed > div.ed.article-head.margin-bottom-large > h4 > a',
    author: '#main > div > div.eq.section.secontent.background-color-content > div > div.ed.article-wrapper.inner-container > div.ed > div.ed.article-head.margin-bottom-large > div.ed.flex.flex-wrap.flex-left.flex-middle.title-toolbar > div.ed.flex.flex-wrap > span:nth-child(1) > a',
    date: '',
    hitCount: '',
};


module.exports = {
    Clien,
    Bobae,
    Bullpen,
    Etoland,
    SLR,
    TodayHumor,
    Cook,
    Gasengi,
    RuliWeb,
    PpomPu,
    Instiz,
    TheQoo,
    FmKorea,
    DogDrip,
    Ilbe,
    HumorUniv,
}