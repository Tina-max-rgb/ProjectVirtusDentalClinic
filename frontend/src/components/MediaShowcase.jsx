import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

const COPY = {
  fr:{eyebrow:"LA CLINIQUE EN IMAGES",title:"Voyez Virtus avant de venir",intro:"Une sélection de cas, de patients et de moments de vie à la clinique. Ouvrez une image pour la voir en grand ou lancez une vidéo.",photos:"Photos",videos:"Vidéos",all:"Toute la galerie",social:"Voir les publications officielles"},
  en:{eyebrow:"THE CLINIC IN IMAGES",title:"See Virtus before you arrive",intro:"A selection of cases, patients and moments from the clinic. Open a photo or play a video.",photos:"Photos",videos:"Videos",all:"Full gallery",social:"See official posts"},
  it:{eyebrow:"LA CLINICA IN IMMAGINI",title:"Scopri Virtus prima di arrivare",intro:"Una selezione di casi, pazienti e momenti della clinica.",photos:"Foto",videos:"Video",all:"Galleria completa",social:"Vedi i post ufficiali"},
  es:{eyebrow:"LA CLÍNICA EN IMÁGENES",title:"Conoce Virtus antes de venir",intro:"Una selección de casos, pacientes y momentos de la clínica.",photos:"Fotos",videos:"Vídeos",all:"Galería completa",social:"Ver publicaciones oficiales"},
  de:{eyebrow:"DIE KLINIK IN BILDERN",title:"Virtus vor Ihrer Ankunft sehen",intro:"Eine Auswahl von Fällen, Patienten und Momenten aus der Klinik.",photos:"Fotos",videos:"Videos",all:"Gesamte Galerie",social:"Offizielle Beiträge"},
  pt:{eyebrow:"A CLÍNICA EM IMAGENS",title:"Veja a Virtus antes de chegar",intro:"Uma seleção de casos, pacientes e momentos da clínica.",photos:"Fotos",videos:"Vídeos",all:"Galeria completa",social:"Ver publicações oficiais"},
  ru:{eyebrow:"КЛИНИКА В ИЗОБРАЖЕНИЯХ",title:"Посмотрите Virtus до приезда",intro:"Подборка случаев, пациентов и моментов из клиники.",photos:"Фото",videos:"Видео",all:"Вся галерея",social:"Официальные публикации"},
  ar:{eyebrow:"العيادة بالصور",title:"تعرّف على Virtus قبل وصولك",intro:"مجموعة من الحالات والمرضى ولحظات من العيادة.",photos:"صور",videos:"فيديو",all:"كل المعرض",social:"المنشورات الرسمية"},
  sq:{eyebrow:"KLINIKA NË IMAZHE",title:"Shihni Virtus para se të vini",intro:"Një përzgjedhje rastesh, pacientësh dhe momentesh nga klinika.",photos:"Foto",videos:"Video",all:"Galeria e plotë",social:"Postimet zyrtare"},
  zh:{eyebrow:"诊所影像",title:"来诊前先看看 Virtus",intro:"精选病例、患者和诊所日常影像。点击照片放大或播放视频。",photos:"照片",videos:"视频",all:"完整图库",social:"查看官方动态"}
};

export default function MediaShowcase(){
  const {lang,gallery,videoTestimonials,contact}=useLanguage();
  const ref=useReveal();
  const d=COPY[lang]||COPY.en;
  const [tab,setTab]=useState("photos");
  const photos=(gallery||[]).slice(0,16);
  const videos=(videoTestimonials||[]).slice(0,8);
  const prefix=lang==="fr"?"":`/${lang}`;
  return <section className="media-showcase reveal" ref={ref}>
    <div className="wrap">
      <div className="media-head">
        <div className="sec-head"><span className="eyebrow">{d.eyebrow}</span><h2>{d.title}</h2><p>{d.intro}</p></div>
        <div className="media-actions"><div className="media-tabs"><button className={tab==="photos"?"active":""} onClick={()=>setTab("photos")}>{d.photos}</button><button className={tab==="videos"?"active":""} onClick={()=>setTab("videos")}>{d.videos}</button></div><Link className="text-link" to={`${prefix}/before-after`}>{d.all} ↗</Link></div>
      </div>
      {tab==="photos" ? <div className="media-photo-grid">{photos.map((item,i)=><Link to={`${prefix}/before-after`} className={`media-photo media-photo-${i+1}`} key={item.src}><img src={item.src} alt={item.name} loading="lazy"/><span>{item.name}</span></Link>)}</div> : <div className="media-video-grid">{videos.map((item,i)=><div className="media-video" key={item.video}><video src={item.video} poster={item.poster} controls preload="metadata" playsInline/><div><strong>{item.name}</strong><span>Virtus Dental Center · Tirana</span></div></div>)}</div>}
      {contact?.instagram && <div className="media-social-bar"><div><strong>{d.social}</strong><span>@virtus.dental.center · Instagram · Facebook · YouTube · TikTok</span></div><div className="media-social-links"><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={contact.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a><a href={contact.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a>{contact.tiktok && <a href={contact.tiktok} target="_blank" rel="noopener noreferrer">TikTok ↗</a>}</div></div>}
    </div>
  </section>;
}
