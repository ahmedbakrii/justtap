// ==========================================
// 1. منطقة إدخال البيانات (عدّل هنا فقط!)
// ==========================================
const profileData = {
    images: {
        cover: "images/cover.jpg",                           
        profile: "images/profile.jpg",                       
        logo: "https://jus-tt-ap.com/images/logo.png" // رابط لوجو موقعك الأساسي
    },
    contact: {
        phone: "+966500000000",      // رقم الهاتف (بالمفتاح الدولي وعلامة +)
        email: "magd@example.com"    // الإيميل
    },
    // السوشيال ميديا (اترك الرابط فارغاً "" ولن يظهر في الكارت)
    socials: {
        instagram: "https://instagram.com/yourprofile",
        twitter: "https://x.com/yourprofile",                 
        snapchat: "https://snapchat.com/add/yourprofile",
        linkedin: "https://linkedin.com/in/yourprofile",
        facebook: "https://facebook.com/yourprofile",                
        whatsapp: "966500000000",    // رقم الواتساب بدون + (سيظهر مع السوشيال ميديا)
        tiktok: "https://tiktok.com/@yourprofile",
        website: "https://jus-tt-ap.com"
    },
    // البيانات باللغة العربية
    ar: {
        name: "ماجد محمد",
        job: "أخصائي صحة وسلامة مهنية (HSE)",
        bio: "متخصص في إدارة المخاطر الصناعية وتطبيق معايير السلامة العالمية في بيئات العمل لضمان إنتاجية آمنة ومستدامة.",
        saveContact: "حفظ جهة الاتصال",
        poweredBy: "بدعم من"
    },
    // البيانات باللغة الإنجليزية
    en: {
        name: "Magd Mohamed",
        job: "HSE Specialist",
        bio: "Specialized in industrial risk management and implementing global safety standards in work environments.",
        saveContact: "Save Contact",
        poweredBy: "Powered by"
    }
};

// ==========================================
// 2. كود التشغيل (لا تقم بتعديل ما بالأسفل)
// ==========================================

let currentLang = 'ar'; 

const socialIcons = {
    instagram: "fa-brands fa-instagram",
    twitter: "fa-brands fa-x-twitter",
    snapchat: "fa-brands fa-snapchat",
    linkedin: "fa-brands fa-linkedin-in",
    facebook: "fa-brands fa-facebook-f",
    whatsapp: "fa-brands fa-whatsapp",
    tiktok: "fa-brands fa-tiktok",
    website: "fa-solid fa-globe"
};

function initProfile() {
    // تركيب الصور
    document.getElementById('cover-img').style.backgroundImage = `url('${profileData.images.cover}')`;
    document.getElementById('profile-img').src = profileData.images.profile;
    document.getElementById('footer-logo-img').src = profileData.images.logo;

    // أزرار الاتصال العلوية (الهاتف والإيميل)
    document.getElementById('link-phone').href = `tel:${profileData.contact.phone}`;
    document.getElementById('link-email').href = `mailto:${profileData.contact.email}`;

    // شبكة السوشيال ميديا
    const socialContainer = document.getElementById('social-container');
    socialContainer.innerHTML = '';
    
    for (const [network, url] of Object.entries(profileData.socials)) {
        if (url && url.trim() !== "") {
            const a = document.createElement('a');
            // معالجة الواتساب ليفتح المحادثة مباشرة
            if (network === 'whatsapp') {
                a.href = `https://wa.me/${url}`;
            } else {
                a.href = url;
            }
            a.target = "_blank";
            a.innerHTML = `<i class="${socialIcons[network]}"></i>`;
            socialContainer.appendChild(a);
        }
    }
    applyLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
}

function applyLanguage() {
    const data = profileData[currentLang];
    
    document.getElementById('html-tag').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('html-tag').lang = currentLang;

    document.getElementById('name').textContent = data.name;
    document.getElementById('job-title').textContent = data.job;
    document.getElementById('bio').textContent = data.bio;
    document.getElementById('save-text').textContent = data.saveContact;
    document.getElementById('powered-text').textContent = data.poweredBy;
}

function downloadVCard() {
    const data = profileData[currentLang];
    // إذا كان الواتساب موجوداً نضعه في الـ VCard أيضاً
    const waPhone = profileData.socials.whatsapp ? `\nTEL;TYPE=CELL,VOICE:+${profileData.socials.whatsapp}` : '';
    
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${data.name}
N;CHARSET=UTF-8:;${data.name};;;
TEL;TYPE=WORK,VOICE:${profileData.contact.phone}${waPhone}
EMAIL;TYPE=PREF,INTERNET:${profileData.contact.email}
TITLE;CHARSET=UTF-8:${data.job}
URL:${profileData.socials.website}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

window.onload = initProfile;
