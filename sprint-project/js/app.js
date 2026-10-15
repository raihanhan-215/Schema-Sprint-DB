(function(){
var KEY="sprint:history2",LISTS=["menimbang","dasar","untuk","tembusan"];
var P0={nama:"",nip:"",pangkat:"",jabatan:""};
var base={kementerian:"KEMENTERIAN HUKUM REPUBLIK INDONESIA",unit:"BADAN PENGEMBANGAN SUMBER DAYA MANUSIA HUKUM",alamat:"Jalan Raya Gandul No.4 Cinere Depok 16512",kontak:"Telepon: (021) 7540077\nLaman: https://bpsdm.kemenkum.go.id, Pos-el: bpsdm@kemenkum.go.id",logo:"",kota:"Depok",qr:true};
var presets={
rinci:Object.assign({},base,{mode:"rinci",nomor:"SDM-UM.03.07-001",pejabat:"KEPALA BADAN PENGEMBANGAN SUMBER DAYA MANUSIA HUKUM,",
 menimbang:["bahwa dalam rangka pelaksanaan kegiatan *Nama Kegiatan* di Lokasi Kegiatan;","bahwa untuk melaksanakan kegiatan dimaksud dipandang perlu untuk menunjuk pejabat/pegawai di bawah ini;","bahwa berdasarkan pertimbangan sebagaimana dimaksud pada huruf a dan b perlu ditetapkan Surat Perintah."],
 dasar:["Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara (Lembaran Negara Republik Indonesia Tahun 2023 Nomor 141);","Peraturan Menteri Hukum Nomor 1 Tahun 2024 tentang Organisasi dan Tata Kerja Kementerian Hukum;","Undangan dari Penyelenggara tanggal ... perihal *Judul Undangan*."],
 personel:[{nama:"Contoh Pegawai Satu, S.H., M.Si.",nip:"197001011995031001",pangkat:"Pembina Utama Madya / IV.d",jabatan:"Asesor Sumber Daya Manusia Aparatur Ahli Utama"},{nama:"Contoh Pegawai Dua, S.S., M.Si.",nip:"197505021999032002",pangkat:"Pembina Utama Muda / IV.c",jabatan:"Wakil Direktur Bidang Keuangan dan Umum"}],
 kegiatan:"",untuk:["Menghadiri kegiatan *Nama Kegiatan* di Lokasi Kegiatan;","Waktu penugasan hari Sabtu s.d. Rabu, 3 s.d. 7 Oktober 2026 bertempat di Lokasi Kegiatan;","Biaya perjalanan dinas ditanggung secara penuh oleh Penyelenggara;","Kegiatan ini merupakan Dinas Luar *Full*;","Melaporkan hasil kegiatan kepada atasan langsung setelah selesai melaksanakan kegiatan tersebut."],
 tanggal:"2026-08-26",jabatan:"Kepala Badan,",ttdNama:"Nama Pejabat",tembusan:["Menteri Hukum;","Wakil Menteri Hukum;","Sekretaris Jenderal Kementerian Hukum;","Inspektur Jenderal Kementerian Hukum."]}),
lampiran:Object.assign({},base,{mode:"lampiran",nomor:"SDM.1-UM.03.07-002",pejabat:"SEKRETARIS BADAN PENGEMBANGAN SUMBER DAYA MANUSIA HUKUM,",
 menimbang:["bahwa sehubungan dengan kegiatan Diseminasi dan *Training of Trainers* (ToT) di Kabupaten Contoh;","bahwa untuk mengikuti kegiatan dimaksud dipandang perlu untuk menunjuk pejabat/pegawai di bawah ini;","bahwa berdasarkan pertimbangan sebagaimana dimaksud pada huruf a dan b perlu ditetapkan Surat Perintah."],
 dasar:["Undang-undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara (Lembaran Negara Republik Indonesia Tahun 2023 Nomor 141);","Peraturan Menteri Keuangan tentang Perjalanan Dinas Dalam Negeri;","Peraturan Menteri Hukum Nomor 1 Tahun 2024 tentang Organisasi dan Tata Kerja Kementerian Hukum;","Surat Direktur ... Nomor ... hal Undangan Kegiatan Diseminasi dan *Training of Trainers* (ToT)."],
 personel:[{nama:"Contoh Pegawai A, S.H., M.Hum.",nip:"196405091991031003",pangkat:"Pembina Utama (IV/e)",jabatan:"Widyaiswara Ahli Utama"},{nama:"Contoh Pegawai B, S.T., M.M.",nip:"198004162009011008",pangkat:"Pembina Utama Muda (IV/c)",jabatan:"Widyaiswara Ahli Madya"},{nama:"Contoh Pegawai C, S.E., M.AP.",nip:"198802122010121003",pangkat:"Pembina (IV/a)",jabatan:"Analis SDM Aparatur Ahli Madya"}],
 kegiatan:"Daftar pegawai BPSDM yang mengikuti kegiatan Diseminasi dan Training of Trainers (ToT) di Kabupaten Contoh",
 untuk:["Mengikuti kegiatan Diseminasi dan *Training of Trainers* (ToT) di Kabupaten Contoh;","Waktu penugasan hari Rabu s.d. Kamis, 23 s.d. 24 September 2026 bertempat di Gedung Sekretariat Daerah;","Kegiatan ini merupakan Dinas Luar *Full*;","Melaporkan hasil kegiatan kepada atasan langsung setelah selesai melaksanakan kegiatan tersebut."],
 tanggal:"2026-09-23",jabatan:"Sekretaris,",ttdNama:"Nama Pejabat",tembusan:[]})};
var blank=function(){return Object.assign({},base,{logo:"",mode:"rinci",nomor:"",pejabat:"",menimbang:[""],dasar:[""],personel:[Object.assign({},P0)],kegiatan:"",untuk:[""],tanggal:"",jabatan:"",ttdNama:"",tembusan:[]})};
var S=clone(presets.rinci);
function clone(o){return JSON.parse(JSON.stringify(o))}
var $=function(s){return document.querySelector(s)};
var esc=function(t){return String(t==null?"":t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
var fm=function(t){return esc(t).replace(/\*(.+?)\*/g,"<em>$1</em>")};
var ph=function(v,t){return v?fm(v):'<span class="empty">['+t+']</span>'};
function tgl(s){if(!s)return"";return new Date(s+"T00:00:00").toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}

/* QR contoh (bukan QR valid): pola dari nomor surat */
function qrSvg(seed){var n=25,h=0,i,x,y,r="";for(i=0;i<seed.length;i++)h=(h*31+seed.charCodeAt(i))>>>0;h=h||7;
 var f=function(a,b){return(a<7&&b<7)||(a>n-8&&b<7)||(a<7&&b>n-8)};
 for(y=0;y<n;y++)for(x=0;x<n;x++){var on;
  if(f(x,y)){var ax=x>n-8?x-(n-7):x,ay=y>n-8?y-(n-7):y;on=ax==0||ax==6||ay==0||ay==6||(ax>1&&ax<5&&ay>1&&ay<5)}
  else{h=(h*1103515245+12345)>>>0;on=(h>>>16)&1}
  if(on)r+='<rect x="'+x+'" y="'+y+'" width="1" height="1"/>'}
 return'<svg class="qr" viewBox="-1 -1 27 27" aria-label="Contoh QR" role="img"><rect x="-1" y="-1" width="27" height="27" fill="#fff"/>'+r+'</svg>'}

var FOOT='<div class="foot">Dokumen ini telah ditandatangani secara elektronik menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE), Badan Siber dan Sandi Negara.<br>Keaslian dokumen dapat dicek melalui tautan https://bsre.bssn.go.id/verifikasi</div>';

function kop(){var k=S.kontak.split("\n").map(esc).join("<br>");
 return'<div class="kop"><div class="logo">'+(S.logo?'<img alt="Logo" src="'+S.logo+'">':'LOGO')+'</div><div class="tx"><div class="k">'+esc(S.kementerian)+'</div><div class="u">'+esc(S.unit)+'</div>'+esc(S.alamat)+'<br>'+k+'</div></div>'}
function ttd(l){return'<div class="ttdwrap"><div>'+(S.qr?qrSvg(S.nomor+S.tanggal):"")+'</div><div class="ttd">'+(l?'':'<div>'+ph(S.kota,"kota")+', '+(tgl(S.tanggal)||'<span class="empty">[tanggal]</span>')+'</div>')+'<div>'+ph(S.jabatan,"jabatan")+'</div><div class="sp">'+(S.qr?"[tanda tangan elektronik]":"")+'</div><div>'+ph(S.ttdNama,"nama pejabat")+'</div></div></div>'}
function items(a,cls,hold){var l=a.filter(Boolean);return'<ol'+(cls?' class="'+cls+'"':'')+'>'+(l.map(function(x){return"<li>"+fm(x)+"</li>"}).join("")||'<li class="empty">['+hold+']</li>')+'</ol>'}

function render(){
 var pers=S.personel.filter(function(p){return p.nama||p.nip||p.pangkat||p.jabatan});
 var kepada=S.mode==="lampiran"?'<div>Daftar Nama Pegawai (terlampir)</div>':
  '<ol>'+(pers.map(function(p){return'<li class="person"><div class="pt"><span>Nama</span><span>:</span><span>'+esc(p.nama)+'</span></div><div class="pt"><span>NIP</span><span>:</span><span>'+esc(p.nip)+'</span></div><div class="pt"><span>Pangkat/Gol</span><span>:</span><span>'+esc(p.pangkat)+'</span></div><div class="pt"><span>Jabatan</span><span>:</span><span>'+esc(p.jabatan)+'</span></div></li>'}).join("")||'<li class="empty">[belum ada pegawai]</li>')+'</ol>';
 var tem=S.tembusan.filter(Boolean).length?'<div class="tembusan">Tembusan:'+items(S.tembusan,"","")+'</div>':"";
 var h='<article class="paper">'+kop()+
  '<div class="tc" style="margin-bottom:14px">SURAT PERINTAH<br>NOMOR '+ph(S.nomor,"nomor")+'</div>'+
  '<div class="tc" style="margin-bottom:8px">'+ph(S.pejabat,"pejabat penerbit")+'</div>'+
  '<div class="sec"><span>Menimbang</span><span>:</span>'+items(S.menimbang,"a","menimbang")+'</div>'+
  '<div class="sec" style="margin-top:8px"><span>Dasar</span><span>:</span>'+items(S.dasar,"","dasar")+'</div>'+
  '<div class="tc" style="margin:16px 0 8px">MEMERINTAHKAN:</div>'+
  '<div class="sec"><span>Kepada</span><span>:</span>'+kepada+'</div>'+
  '<div class="sec" style="margin-top:8px"><span>Untuk</span><span>:</span>'+items(S.untuk,"","tugas")+'</div>'+
  ttd()+tem+(S.qr?FOOT:'')+'</article>';
 if(S.mode==="lampiran"){
  h+='<article class="paper"><div style="margin-left:auto;width:300px;font-size:12px;margin-bottom:22px"><div style="font-size:14px">LAMPIRAN</div>Surat Perintah '+esc(S.jabatan.replace(/,$/,""))+'<br>Nomor : '+esc(S.nomor)+'<br>Tanggal : '+esc(tgl(S.tanggal))+'</div>'+
  '<div class="tc" style="font-weight:700;text-transform:uppercase;margin-bottom:12px">'+ph(S.kegiatan,"nama kegiatan")+'</div>'+
  '<table class="lamp"><thead><tr><th>No.</th><th>Nama/NIP</th><th>Pangkat (Gol./ruang)</th><th>Jabatan</th></tr></thead><tbody>'+
  (pers.map(function(p,i){return'<tr><td style="text-align:center">'+(i+1)+'.</td><td>'+esc(p.nama)+'<br>NIP.'+esc(p.nip)+'</td><td style="text-align:center">'+esc(p.pangkat)+'</td><td>'+esc(p.jabatan)+'</td></tr>'}).join("")||'<tr><td colspan="4" class="empty">[belum ada pegawai]</td></tr>')+
  '</tbody></table>'+ttd(true)+(S.qr?FOOT:'')+'</article>'}
 $("#stage").innerHTML=h;
}
/* kolom lampiran: tanda tangan tanpa kota/tanggal */

/* ---------- FORMULIR ---------- */
function rowHtml(kind,i){
 var rm='<button class="sm danger" data-rm="'+kind+':'+i+'" aria-label="Hapus baris '+(i+1)+'">Hapus</button>';
 if(kind==="personel"){var p=S.personel[i];return'<div class="row"><div class="col">'+["nama","nip","pangkat","jabatan"].map(function(f){return'<input data-p="'+i+':'+f+'" aria-label="'+f+'" placeholder="'+{nama:"Nama lengkap dan gelar",nip:"NIP",pangkat:"Pangkat/Gol",jabatan:"Jabatan"}[f]+'" value="'+esc(p[f])+'">'}).join("")+'</div>'+rm+'</div>'}
 return'<div class="row"><div class="col"><textarea data-l="'+kind+':'+i+'" aria-label="'+kind+' '+(i+1)+'">'+esc(S[kind][i])+'</textarea></div>'+rm+'</div>'}
function lists(){LISTS.concat("personel").forEach(function(k){$("#"+k+"List").innerHTML=S[k].map(function(_,i){return rowHtml(k,i)}).join("")})}
function fill(){document.querySelectorAll("[data-k]").forEach(function(e){e.value=S[e.dataset.k]||""});
 document.querySelectorAll("[data-c]").forEach(function(e){e.checked=!!S[e.dataset.c]});lists();render()}

$("#formPane").addEventListener("input",function(e){var t=e.target;
 if(t.dataset.k)S[t.dataset.k]=t.value;
 else if(t.dataset.c)S[t.dataset.c]=t.checked;
 else if(t.dataset.l){var a=t.dataset.l.split(":");S[a[0]][+a[1]]=t.value}
 else if(t.dataset.p){var b=t.dataset.p.split(":");S.personel[+b[0]][b[1]]=t.value}
 else if(t.id==="logo"&&t.files[0]){var r=new FileReader();r.onload=function(){S.logo=r.result;render()};r.readAsDataURL(t.files[0]);return}
 render()});
$("#formPane").addEventListener("click",function(e){var t=e.target.closest("button");if(!t)return;
 if(t.dataset.preset){S=clone(presets[t.dataset.preset]);fill();toast("Contoh dimuat")}
 if(t.dataset.add){S[t.dataset.add].push(t.dataset.add==="personel"?Object.assign({},P0):"");lists();render()}
 if(t.dataset.rm){var a=t.dataset.rm.split(":");S[a[0]].splice(+a[1],1);if(!S[a[0]].length&&a[0]!=="tembusan")S[a[0]].push(a[0]==="personel"?Object.assign({},P0):"");lists();render()}});
$("#btnPrint").onclick=function(){window.print()};
$("#btnReset").onclick=function(){if(confirm("Kosongkan semua isian formulir?")){S=blank();fill();toast("Formulir dikosongkan")}};

/* ---------- RIWAYAT ---------- */
function load(){try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch(e){return[]}}
function save(a){try{localStorage.setItem(KEY,JSON.stringify(a));return true}catch(e){return false}}
function hist(){var a=load();$("#cnt").textContent=a.length;
 $("#histList").innerHTML=a.length?a.map(function(h,i){return'<div class="item"><div><b>'+esc(h.data.nomor||"(tanpa nomor)")+'</b><small>'+esc(h.data.unit)+' · disimpan '+esc(h.saved)+'</small></div><button class="sm" data-load="'+i+'">Buka</button><button class="sm danger" data-del="'+i+'">Hapus</button></div>'}).join(""):'<p style="color:var(--muted)">Belum ada surat tersimpan. Isi formulir lalu pilih “Simpan ke riwayat”.</p>'}
$("#btnSave").onclick=function(){var a=load();a.unshift({saved:new Date().toLocaleString("id-ID"),data:clone(S)});toast(save(a.slice(0,30))?"Surat disimpan ke riwayat":"Penyimpanan tidak tersedia di peramban ini");hist()};
$("#histList").addEventListener("click",function(e){var t=e.target.closest("button");if(!t)return;var a=load();
 if(t.dataset.load){S=a[+t.dataset.load].data;fill();show("buat");toast("Surat dibuka")}
 if(t.dataset.del){a.splice(+t.dataset.del,1);save(a);hist()}});

function show(w){var b=w==="buat";$("#formPane").hidden=!b;$("#stage").hidden=!b;$("#histPane").hidden=b;
 $("#tab-buat").setAttribute("aria-selected",b);$("#tab-riwayat").setAttribute("aria-selected",!b);if(!b)hist()}
$("#tab-buat").onclick=function(){show("buat")};$("#tab-riwayat").onclick=function(){show("riwayat")};
var tm;function toast(m){var t=$("#toast");t.textContent=m;t.hidden=false;clearTimeout(tm);tm=setTimeout(function(){t.hidden=true},2200)}
fill();hist();
})();
