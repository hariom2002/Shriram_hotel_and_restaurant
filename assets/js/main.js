/**
 * SHREE RAM HOTEL, RESTAURANT & CAFE
 * Modern & Premium One-Page Website Interactivity Script
 * Style system accent: Warm Timber & Ivory
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 0. Translation Database & Language Selector Mechanics
    // ==========================================================================
    const translations = {
        hi: {
            head_title: "श्री राम होटल, रेस्टोरेंट और कैफ़े | प्रीमियम शुद्ध शाकाहारी भोजन और उत्सव भवन",
            skip_link: "मुख्य सामग्री पर जाएं",
            brand_sub: "Hotel & Restaurant",
            nav_home: "Home",
            nav_services: "Our Services",
            nav_restaurant: "Restaurant & Cafe",
            nav_banquet: "Banquet Hall",
            nav_menu: "Menu",
            nav_gallery: "Gallery",
            nav_btn_reserve: "तालिका आरक्षित करें",
            
            hero_subtitle: "सात्विक एवं शुद्ध शाकाहारी विलासिता",
            hero_title: "जहाँ उत्कृष्ट स्वाद और भव्य उत्सव मिलते हैं",
            hero_desc: "हमारे सात्विक शाकाहारी व्यंजनों का आनंद लें, लकड़ी की नक्काशीदार कैफ़े में विश्राम करें, और हमारे आलीशान उत्सव भवन में भव्य और अविस्मरणीय आयोजन मनाएं।",
            hero_btn_menu: "सूची देखें",
            hero_btn_venue: "भवन आरक्षित करें",
            hero_slide1_title: "भव्य स्वागत कक्ष",
            hero_slide1_desc: "अखरोट की लकड़ी की नक्काशी और आधुनिक मार्बल का संगम",
            hero_slide2_title: "शानदार प्रवेश लॉबी",
            hero_slide2_desc: "हाथीदांत की दीवारें और आरामदायक लकड़ी के बैठक सोफे",
            hero_slide3_title: "प्रकाशमय कांच गैलरी",
            hero_slide3_desc: "चमकदार संगमरमर फर्श और शांत-विलासिता वाली खिड़कियां",
            hero_slide4_title: "श्री राम सेल्फी पॉइंट",
            hero_slide4_desc: "सुंदर पलों को यादगार बनाने के लिए चमकता हुआ सेल्फी स्पॉट",
            
            services_subtitle: "हमारी सेवाएँ",
            services_title: "उत्कृष्ट आतिथ्य सत्कार और भव्य आयोजन",
            services_lead: "लक्जरी होटल कमरों से लेकर सपनों जैसी शादियों, बेहतरीन भोजन और निजी पारिवारिक मील के पत्थरों तक, हम हर पल को एक भव्य स्मृति में बदल देते हैं।",
            service1_title: "होटल और कमरे",
            service1_desc: "गर्म लकड़ी और हाथीदांत की सफेदी में लिपटी आधुनिक विलासिता और आराम का अनुभव करें। संगमरमर के सुंदर लॉबी, प्रीमियम सुविधाएं और समर्पित रूम सर्विस इसकी विशेषता हैं।",
            service2_title: "रेस्टोरेंट और कैफ़े",
            service2_desc: "100% शुद्ध शाकाहारी वैदिक व्यंजनों का आनंद लें, जो अत्याधुनिक लाइव रसोई में बनाए जाते हैं, साथ ही हमारे बुटीक कॉफी रोस्टर्स और आरामदायक लाउंज भी यहाँ उपलब्ध हैं।",
            service3_title: "विवाह और स्वागत समारोह",
            service3_desc: "हमारे राजसी सुनहरी छत वाले विवाह भवन (क्षमता 800 मेहमानों तक) में भव्य शाही शादियों का आयोजन करें, जो शाही मंचों और बेजोड़ कैटरिंग से सुसज्जित है।",
            service4_title: "जन्मदिन और वर्षगाँठ",
            service4_desc: "अनुकूलित केक टेबल, रंगीन थीम सजावट, उन्नत ध्वनि प्रणाली और एक उत्साही मेजबान टीम के साथ जीवन के अनमोल मील के पत्थरों को मनाएं।",
            service5_title: "निजी कार्यक्रम",
            service5_desc: "कॉर्पोरेट सम्मेलनों, कार्यकारी रात्रिभोजों या निजी पारिवारिक दावतों के लिए विशेष रूप से डिज़ाइन किए गए बैठक लाउंज, निजी भोजन कक्ष और लक्जरी बुफे प्रणालियां।",
            
            restaurant_subtitle: "उत्कृष्ट भोजन का पावन स्थल",
            restaurant_title: "भव्य रेस्टोरेंट और कैफ़े",
            restaurant_lead: "अखरोट की लकड़ी की नक्काशी, सुनहरे विवरण और मोमबत्तियों की हल्की रोशनी से सजे हाथीदांत (Ivory) रंग के बूथों में बैठें।",
            restaurant_tag: "परम पावन वैदिक शुद्धता",
            restaurant_spotlight_title: "हमारी खुली रसोई: आधुनिक और अति-स्वच्छ",
            restaurant_spotlight_desc: "हमारी रसोई केवल भोजन बनाने का स्थान नहीं है; यह हमारा गौरव है। जैसा कि आप हमारे लाइव कैमरे में देख सकते हैं, हम उच्चतम स्तर के स्टेनलेस स्टील वर्कस्टेशन, उन्नत वेंटिलेशन और निरंतर स्वच्छता दिनचर्या का उपयोग करते हैं। प्रत्येक रसोइया पावन नियमों का पालन करता है ताकि आपका भोजन स्वच्छ, शुद्ध और स्वास्थ्यवर्धक रहे।",
            restaurant_list1: "लगातार कीटाणुशोधन और गहरी भाप से सफाई",
            restaurant_list2: "100% जैविक और कोल्ड-प्रेस्ड खाना पकाने के तेल",
            restaurant_list3: "एलर्जी वाले खाद्य पदार्थों के लिए अलग से संचालन व्यवस्था",
            restaurant_btn: "व्यंजनों की सूची देखें",
            restaurant_live_badge: "सजीव रसोई का दृश्य",
            restaurant_slide1_title: "भव्य पारिवारिक भोज",
            restaurant_slide1_desc: "हाथीदांत के आरामदायक केबिन में उत्कृष्ट आतिथ्य सत्कार",
            restaurant_slide2_title: "सजीव भोजन कक्ष",
            restaurant_slide2_desc: "अखरोट की नक्काशीदार दीवारों के बीच सजीव सेवा",
            restaurant_slide3_title: "पारिवारिक समारोह",
            restaurant_slide3_desc: "पीढ़ियों से चला आ रहा आतिथ्य और शुद्ध पारंपरिक स्वाद",
            restaurant_slide4_title: "स्वच्छ खुली रसोई",
            restaurant_slide4_desc: "अत्याधुनिक खुली रसोई जहाँ वैदिक स्वच्छता को प्राथमिकता दी जाती है",
            
            banquet_subtitle: "शाही आयोजन",
            banquet_title: "भव्य उत्सव एवं मैरिज पैलेस",
            banquet_lead: "अतुलनीय भव्यता में कदम रखें। स्वप्निल विवाह समारोहों से लेकर प्रतिष्ठित कॉर्पोरेट सम्मेलनों तक, हम हर उत्सव को भव्य बनाते हैं।",
            banquet_event_subtitle: "यादों को सहेजने का एक सुंदर स्थल",
            banquet_event_desc: "सुनहरी छत, उन्नत ध्वनि प्रणाली, विशेष मंच प्रकाश व्यवस्था और आलीशान लकड़ी की कलाकृतियों से सजे इस भवन में 800 अतिथि आ सकते हैं। जैसा कि चित्र में प्रदर्शित है, यहाँ का विशाल राजसी मंच आपकी तस्वीरों को बेहद खूबसूरत बनाता है।",
            banquet_amenity1_title: "800 अतिथियों की क्षमता",
            banquet_amenity1_desc: "विशाल और लचीली बैठक व्यवस्था",
            banquet_amenity2_title: "24/7 बिजली की सुविधा",
            banquet_amenity2_desc: "बिना किसी रुकावट के लगातार बिजली बैकअप",
            banquet_amenity3_title: "पूर्ण वातानुकूलित (AC)",
            banquet_amenity3_desc: "व्यक्तिगत तापमान नियंत्रण क्षेत्र",
            banquet_amenity4_title: "उत्कृष्ट कैटरिंग",
            banquet_amenity4_desc: "शाही व्यंजनों और बुफे की विशेष व्यवस्था",
            banquet_inquire_btn: "भवन की उपलब्धता जाँचें",
            
            menu_subtitle: "Gourmet Curation",
            menu_title: "The Culinary Menu",
            menu_lead: "Browse our selection of classic flavors, boutique café drinks, and artisanal dessert specialties.",
            menu_tab1: "Starters",
            menu_tab2: "Main Course",
            menu_tab3: "Cafe Lounge",
            menu_tab4: "Sweet Cravings",
            
            starter1_name: "Crispy Broccolini Tempura",
            starter1_desc: "Fresh broccolini coated in airy rice flour tempura, served with a warm timber ginger-soy dipping broth.",
            starter2_name: "Mandala Stuffed Mushrooms",
            starter2_desc: "Juicy Portobello caps stuffed with cottage cheese, forest herbs, and cooked in a brick clay oven.",
            starter3_name: "Paneer Tikka Angare",
            starter3_desc: "Soft malai paneer cubes marinated in rich hung curd and hand-ground spices, flame-grilled to perfection.",
            starter4_name: "Himalayan Veg Momos",
            starter4_desc: "Steamed hand-folded dumplings stuffed with farm-fresh organic cabbage, spring greens, and hot sesame chutney.",
            
            main1_name: "Shree Ram Shahi Paneer",
            main1_desc: "Cottage cheese medallions in a silky cashew and saffron gravy, accented with pure cardamom and edible gold leaf.",
            main2_name: "Nawabi Dal Makhani",
            main2_desc: "Black lentils slow-cooked overnight over timber-wood embers with pure cream and organic white butter.",
            main3_name: "Deccani Jackfruit Biryani",
            main3_desc: "Aromatic long-grain basmati rice layered with tender marinated jackfruit, saffron milk, and fresh mint.",
            main4_name: "Amritsari Kulcha Thali",
            main4_desc: "Flaky, potato-and-onion stuffed flatbread cooked in clay tandoor, served with tasty chole and sweet tamarind relish.",
            
            cafe1_name: "Vanilla Timber Pour Over",
            cafe1_desc: "Slow-drip single-origin light roast coffee infused with organic vanilla bean pod oils.",
            cafe2_name: "Ivory Cream Cortado",
            cafe2_desc: "Perfect 1:1 balance of double-shot specialty espresso and velvety micro-foamed warm almond milk.",
            cafe3_name: "Saffron Ginger Frappe",
            cafe3_desc: "Chilled whipped espresso, aromatic Kashmiri saffron threads, and a kick of ginger extract.",
            cafe4_name: "Hibiscus Rose Cooler",
            cafe4_desc: "Sparkling water brewed with organic hibiscus flowers, rose extract, and crushed ice.",
            
            dessert1_name: "Royal Ivory Rasmalai Cheesecake",
            dessert1_desc: "An elegant fusion: baked ivory cream cheesecake layered over saffron and pistachio-soaked traditional rasmalai.",
            dessert2_name: "Hot Walnut Timber Brownie",
            dessert2_desc: "Warm, fudgy eggless dark chocolate brownie baked with fresh walnuts, served with Madagascar vanilla bean gelato.",
            dessert3_name: "Almond Halwa Baklava Tart",
            dessert3_desc: "Crispy phyllo tart shell filled with warm slow-stirred badam halwa, topped with honey syrup and crushed almond gold.",
            dessert4_name: "Coconut Rose Rabdi Kulfi",
            dessert4_desc: "Traditional slow-reduced milk kulfi infused with toasted organic coconut flakes and premium organic rose petal preserve.",
            
            tag_veg: "Pure Veg",
            tag_chef: "Signature",
            tag_gf: "GF Option",
            tag_royal: "Royal Special",
            tag_special: "Barista Special",
            tag_cool: "Cooling",
            tag_botanical: "Botanical",
            
            gallery_subtitle: "चित्रमयी अनुभव",
            gallery_title: "भव्य चित्र दीर्घा",
            gallery_lead: "हमारे आलीशान भोजनालय, अत्याधुनिक स्वच्छ रसोई और भव्य विवाह उत्सव भवनों की एक सुंदर झलक।",
            gallery_filter1: "फाइन डाइन",
            gallery_filter2: "होटल और इंटीरियर",
            gallery_filter3: "उत्सव मंच",
            gallery_over_logo: "श्री राम लोगो",
            gallery_over_hospitality: "आतिथ्य सत्कार",
            gallery_over_family: "पारिवारिक भोज",
            gallery_over_hall: "डाइनिंग हॉल",
            gallery_over_reception: "स्वागत कक्ष",
            gallery_over_kitchen: "स्वच्छ रसोई",
            gallery_over_facade: "होटल बिल्डिंग",
            gallery_over_entrance: "प्रवेश द्वार",
            gallery_over_counter: "फ़्रंट काउंटर",
            gallery_over_lounge: "लॉन्ज व्यू",
            gallery_over_lobby: "होटल लॉबी",
            gallery_over_banquet: "उत्सव मंच",
            
            reserve_subtitle: "अपना स्थान आरक्षित करें",
            reserve_title: "हमारे आतिथ्य का अनुभव करने के लिए उत्सुक हैं?",
            reserve_desc: "भोजन के लिए एक केबिन आरक्षित करें, कैफ़े लाउंज में जगह चुनें, या अपने विशेष आयोजनों के लिए हमारे भव्य उत्सव भवन की उपलब्धता के बारे में पूछें। नीचे अपना विकल्प चुनें, और हमारे प्रबंधक शीघ्र ही आपसे संपर्क करेंगे।",
            contact_phone_lbl: "फ़ोन पर आरक्षण",
            contact_email_lbl: "ईमेल सहायता",
            form_toggle1: "तालिका आरक्षित करें",
            form_toggle2: "उत्सव भवन आरक्षित करें",
            form_lbl_name: "पूरा नाम",
            form_placeholder_name: "उदा., अर्जुन शर्मा",
            form_lbl_phone: "फ़ोन नंबर",
            form_placeholder_phone: "उदा., +91-98765-43210",
            form_lbl_email: "ईमेल पता",
            form_placeholder_email: "उदा., arjun@gmail.com",
            form_lbl_date: "पसंदीदा तारीख",
            form_lbl_time: "पसंदीदा समय",
            form_lbl_guests: "अतिथियों की संख्या",
            form_lbl_event: "आयोजन की श्रेणी",
            form_lbl_notes: "विशेष आवश्यकताएं / सुझाव",
            form_placeholder_notes: "उदा., व्हीलचेयर की सुविधा, बच्चों के लिए विशेष कुर्सी, या भव्य मंच सजावट...",
            form_btn_submit: "तालिका आरक्षित करें",
            form_err_name: "कृपया अपना पूरा नाम लिखें",
            form_err_phone: "कृपया वैध १० अंकों का नंबर लिखें",
            form_err_email: "कृपया एक वैध ईमेल लिखें",
            form_err_date: "कृपया एक वैध तारीख चुनें",
            form_err_time: "कृपया समय का चयन करें",
            
            success_title: "आरक्षण की पूछताछ प्राप्त हुई!",
            success_desc: "धन्यवाद <strong id=\"success-name\">अर्जुन</strong>। हमारे लक्जरी प्रबंधक <span id=\"success-date\">25 मई, 2026</span> को <span id=\"success-time\">19:30</span> बजे के आपके आरक्षण का विवरण समीक्षा करके आपसे <strong id=\"success-phone\">+91-98765-43210</strong> पर 15 मिनट में पुष्टि के लिए संपर्क करेंगे।",
            success_reset_btn: "दूसरा अनुरोध करें",
            
            test_subtitle: "अतिथियों के अनुभव",
            test_title: "शुद्धता और विलासिता के साक्षी",
            test1_text: "भोजन कक्ष की इमारतों में की गई अखरोट की लकड़ी की नक्काशी इसे बेहद प्रीमियम बनाती है। लेकिन यहाँ का मुख्य आकर्षण भोजन है! इनका शाही पनीर स्वादों की एक उत्कृष्ट कृति है। हर एक निवाले में सच्ची सात्विक शुद्धता का अनुभव होता है!",
            test1_name: "मीरा सिंघानिया",
            test1_desg: "खाद्य समीक्षक (Food Critic)",
            test2_text: "हमने अपनी बेटी की शादी का रिसेप्शन श्री राम के उत्सव भवन में आयोजित किया था। मंच की भव्यता और फूलों की सजावट बिल्कुल वैसी ही थी जैसी तस्वीरों में दिखाई गई थी। कैटरिंग टीम ने 500 मेहमानों को असाधारण आतिथ्य सत्कार के साथ सात्विक भोजन परोसे।",
            test2_name: "राजेश कुमार वर्मा",
            test2_desg: "व्यवसायी एवं संतुष्ट पिता",
            test3_text: "मैं रिमोट से काम करता हूँ, और यहाँ का लकड़ी का आरामदायक कैफ़े लाउंज मेरा पसंदीदा कोना है। यहाँ का आइवरी क्रीम कोर्टाडो बेहतरीन बनावट वाला होता है, और अखरोट ब्राउनी लाजवाब है। यहाँ का शांत और आलीशान माहौल शहर में मिलना मुश्किल है।",
            test3_name: "आरव मल्होत्रा",
            test3_desg: "वरिष्ठ सॉफ्टवेयर आर्किटेक्ट",
            
            footer_bio: "100% शुद्ध शाकाहारी अखंडता, आरामदायक बुटीक कैफ़े लाउंज और शाही विवाह उत्सवों के भव्य आयोजन के साथ भारतीय पाक आतिथ्य परंपराओं को सहेजता हमारा विशेष संस्थान।",
            footer_hours_title: "संचालन समय",
            day_weekdays: "सोमवार - शुक्रवार",
            time_weekdays: "11:00 AM - 12:00 Midnight",
            day_weekends: "शनिवार - रविवार",
            time_weekends: "11:00 AM - 12:00 Midnight",
            day_lunch: "भोजनालय दोपहर का भोजन",
            day_dinner: "भोजनालय रात्रिकालीन भोजन",
            time_dinner: "07:00 PM - 12:00 Midnight",
            footer_loc_title: "हमसे मिलें",
            footer_addr_title: "होटल श्री राम पैलेस",
            footer_addr_line1: "बायपास चौराहा, सुहागी",
            footer_addr_line2: "कटनी, मध्य प्रदेश 483501",
            footer_map_btn: "गूगल मैप्स में खोलें",
            footer_copyright: "© 2026 श्री राम होटल, रेस्टोरेंट और कैफ़े। सर्वाधिकार सुरक्षित। श्रद्धापूर्वक निर्मित।",
            footer_privacy: "गोपनीयता नीति",
            footer_terms: "नियम और शर्तें"
        },
        en: {
            head_title: "Shree Ram Hotel, Restaurant & Cafe | Premium Pure Veg Dining & Banquet Hall",
            skip_link: "Skip to main content",
            brand_sub: "Hotel & Restaurant",
            nav_home: "Home",
            nav_services: "Our Services",
            nav_restaurant: "Restaurant & Cafe",
            nav_banquet: "Banquet Hall",
            nav_menu: "Menu",
            nav_gallery: "Gallery",
            nav_btn_reserve: "Reserve Table",
            
            hero_subtitle: "Pure Vegetarian Luxury",
            hero_title: "Where Culinary Heritage Meets Grand Celebrations",
            hero_desc: "Indulge in our organic pure-veg gourmet dishes, relax in our cozy timber-styled cafe, and host majestic memorable events in our luxury banquet halls.",
            hero_btn_menu: "Explore Menu",
            hero_btn_venue: "Book Venue",
            hero_slide1_title: "Grand Reception Lobby",
            hero_slide1_desc: "Sleek walnut carving and premium marble details",
            hero_slide2_title: "Pristine Lobby Lounge",
            hero_slide2_desc: "Ivory walls and bespoke timber seating booths",
            hero_slide3_title: "Luminous Glass Lounge",
            hero_slide3_desc: "Glistening marble tiles and quiet-luxury window niches",
            hero_slide4_title: "The Heart Selfie Spot",
            hero_slide4_desc: "Boutique neon accents to capture your memorable moments",
            
            services_subtitle: "Our Services",
            services_title: "Exquisite Hospitality Tailored to Your Celebrations",
            services_lead: "From luxury stays to fairytale weddings, gourmet dining, and private family milestone celebrations, we turn every moment into a grand memory.",
            service1_title: "Hotel & Rooms",
            service1_desc: "Experience modern luxury and comfort styled in warm timber and ivory white. Features glistening marble lobbies, premium amenities, and dedicated room service.",
            service2_title: "Restaurant & Cafe",
            service2_desc: "Indulge in 100% pure vegetarian Vedic delicacies, slow-cooked in state-of-the-art live kitchens, alongside our boutique coffee roasters and cozy lounges.",
            service3_title: "Weddings & Receptions",
            service3_desc: "Host grand imperial weddings in our majestic golden-ceilinged banquet halls (capacity up to 800 guests), decorated with royal stages and stellar catering.",
            service4_title: "Birthdays & Anniversaries",
            service4_desc: "Celebrate life's precious milestones with customized cake tables, colorful theme decorations, advanced acoustic sound, and an enthusiastic hosting crew.",
            service5_title: "Private Gatherings",
            service5_desc: "Tailored meeting lounges, private dining rooms, and executive buffet systems designed for corporate meets, executive dinners, or private family feasts.",
            
            restaurant_subtitle: "Fine Dining Sanctuary",
            restaurant_title: "The Grand Restaurant & Cafe",
            restaurant_lead: "Immerse yourself in fine gourmet dining designed with rich timber, golden details, and soft candlelit ivory booths.",
            restaurant_tag: "Sacred Vedic Purity",
            restaurant_spotlight_title: "Our Open Sanctum: State-of-the-Art Clean Kitchen",
            restaurant_spotlight_desc: "Our kitchen isn't just a place to prepare food; it is our pride. As captured in our live view, we employ premium culinary grade stainless steel workstations, strict ventilation, and comprehensive sterilization routines. Every chef follows sacred hygiene practices, ensuring every meal is clean, pure, and absolutely healthy.",
            restaurant_list1: "Continuous disinfection and deep steam cleaning",
            restaurant_list2: "100% traceably organic, cold-pressed cooking oils",
            restaurant_list3: "Professional separate handling lines for allergies",
            restaurant_btn: "Browse Dining Menu",
            restaurant_live_badge: "Authentic Live Kitchen Snapshot",
            restaurant_slide1_title: "Elegant Fine Dining",
            restaurant_slide1_desc: "Exquisite culinary presentations served in dynamic, warm ivory spaces",
            restaurant_slide2_title: "Bustling Dining Hall",
            restaurant_slide2_desc: "Vibrant energy and warm hospitality in our grand walnut-clad dining room",
            restaurant_slide3_title: "Traditional Gatherings",
            restaurant_slide3_desc: "Celebrating multi-generational family milestones with pure, authentic tastes",
            restaurant_slide4_title: "The Sanctum Kitchen",
            restaurant_slide4_desc: "State-of-the-art open kitchen prioritizing Vedic hygiene & steam sterilization",
            
            banquet_subtitle: "Imperial Celebrations",
            banquet_title: "The Royal Banquet & Event Hall",
            banquet_lead: "Step into unmatched grandeur. From grand fairytale weddings to prestigious corporate gatherings, we curate events that radiate class and luxury.",
            banquet_event_subtitle: "A Grand Canvas for Lifelong Memories",
            banquet_event_desc: "Featuring grand golden ceilings, acoustic structural panelling, custom stage lights, and plush timber carvings, our event hall easily accommodates up to 800 guests. With a massive red-carpeted royal stage as illustrated, you are assured of picture-perfect memories.",
            banquet_amenity1_title: "800 Guest Capacity",
            banquet_amenity1_desc: "Spacious, flexible layouts",
            banquet_amenity2_title: "24/7 Power Backup",
            banquet_amenity2_desc: "Zero interruptions always",
            banquet_amenity3_title: "Full AC & Ventilation",
            banquet_amenity3_desc: "Individual temperature zones",
            banquet_amenity4_title: "Custom Gourmet Catering",
            banquet_amenity4_desc: "Bespoke luxury buffet styling",
            banquet_inquire_btn: "Inquire Venue Availability",
            
            menu_subtitle: "Gourmet Curation",
            menu_title: "The Culinary Menu",
            menu_lead: "Browse our selection of classic flavors, boutique café drinks, and artisanal dessert specialties.",
            menu_tab1: "Starters",
            menu_tab2: "Main Course",
            menu_tab3: "Cafe Lounge",
            menu_tab4: "Sweet Cravings",
            
            starter1_name: "Crispy Broccolini Tempura",
            starter1_desc: "Fresh broccolini coated in airy rice flour tempura, served with a warm timber ginger-soy dipping broth.",
            starter2_name: "Mandala Stuffed Mushrooms",
            starter2_desc: "Juicy Portobello caps stuffed with aromatic cottage cheese, forest herbs, and cooked in a brick clay oven.",
            starter3_name: "Paneer Tikka Angare",
            starter3_desc: "Soft malai paneer cubes marinated in rich hung curd and hand-ground spices, flame-grilled to perfection.",
            starter4_name: "Himalayan Veg Momos",
            starter4_desc: "Steamed hand-folded dumplings stuffed with farm-fresh organic cabbage, spring greens, and hot sesame chutney.",
            
            main1_name: "Shree Ram Shahi Paneer",
            main1_desc: "Cottage cheese medallions in a silky cashew and saffron gravy, accented with pure cardamom and edible gold leaf.",
            main2_name: "Nawabi Dal Makhani",
            main2_desc: "Black lentils slow-cooked overnight over timber-wood embers with pure cream and organic white butter.",
            main3_name: "Deccani Jackfruit Biryani",
            main3_desc: "Aromatic long-grain basmati rice layered with tender marinated jackfruit, saffron milk, and fresh mint.",
            main4_name: "Amritsari Kulcha Thali",
            main4_desc: "Flaky, potato-and-onion stuffed flatbread cooked in clay tandoor, served with tangy chole and sweet tamarind relish.",
            
            cafe1_name: "Vanilla Timber Pour Over",
            cafe1_desc: "Slow-drip single-origin light roast coffee infused with organic vanilla bean pod oils.",
            cafe2_name: "Ivory Cream Cortado",
            cafe2_desc: "Perfect 1:1 balance of double-shot specialty espresso and velvety micro-foamed warm almond milk.",
            cafe3_name: "Saffron Ginger Frappe",
            cafe3_desc: "Chilled whipped espresso, aromatic Kashmiri saffron threads, and a kick of ginger extract.",
            cafe4_name: "Hibiscus Rose Cooler",
            cafe4_desc: "Sparkling water brewed with organic organic hibiscus flowers, rose extract, and crushed ice.",
            
            dessert1_name: "Royal Ivory Rasmalai Cheesecake",
            dessert1_desc: "An elegant fusion: baked ivory cream cheesecake layered over saffron and pistachio-soaked traditional rasmalai.",
            dessert2_name: "Hot Walnut Timber Brownie",
            dessert2_desc: "Warm, fudgy eggless dark chocolate brownie baked with fresh walnuts, served with Madagascar vanilla bean gelato.",
            dessert3_name: "Almond Halwa Baklava Tart",
            dessert3_desc: "Crispy phyllo tart shell filled with warm slow-stirred badam halwa, topped with honey syrup and crushed almond gold.",
            dessert4_name: "Coconut Rose Rabdi Kulfi",
            dessert4_desc: "Traditional slow-reduced milk kulfi infused with toasted organic coconut flakes and premium organic rose petal preserve.",
            
            tag_veg: "Pure Veg",
            tag_chef: "Signature",
            tag_gf: "GF Option",
            tag_royal: "Royal Special",
            tag_special: "Barista Special",
            tag_cool: "Cooling",
            tag_botanical: "Botanical",
            
            gallery_subtitle: "Visual Experience",
            gallery_title: "The Ivory & Timber Gallery",
            gallery_lead: "A visual tour through our grand dining spaces, our modern clean kitchen, and spectacular marriage halls.",
            gallery_filter1: "Fine Dine",
            gallery_filter2: "Hotel & Interiors",
            gallery_filter3: "Banquet Events",
            gallery_over_logo: "Heritage Symbol",
            gallery_over_hospitality: "Friendly Hospitality",
            gallery_over_family: "Family Gatherings",
            gallery_over_hall: "Active Dining Rush",
            gallery_over_reception: "Reception Lounge",
            gallery_over_kitchen: "State-of-the-Art Kitchen",
            gallery_over_facade: "Grand Facade",
            gallery_over_entrance: "Entrance Lobby",
            gallery_over_counter: "Front Desk",
            gallery_over_lounge: "Lounge Views",
            gallery_over_lobby: "Hotel Lobby",
            gallery_over_banquet: "Royal Banquet Stage",
            
            reserve_subtitle: "Secure Your Experience",
            reserve_title: "Ready to Experience True Hospitality?",
            reserve_desc: "Reserve your dining booth, cafe lounge, or inquire about reserving our majestic banquet stage for your special events. Select your inquiry type below, and our luxury managers will contact you immediately.",
            contact_phone_lbl: "Phone Reservations",
            contact_email_lbl: "Email Support",
            form_toggle1: "Book A Table",
            form_toggle2: "Book Event Venue",
            form_lbl_name: "Full Name",
            form_placeholder_name: "E.g., Arjun Sharma",
            form_lbl_phone: "Phone Number",
            form_placeholder_phone: "E.g., +91-98765-43210",
            form_lbl_email: "Email Address",
            form_placeholder_email: "E.g., arjun@gmail.com",
            form_lbl_date: "Preferred Date",
            form_lbl_time: "Preferred Time",
            form_lbl_guests: "Number of Guests",
            form_lbl_event: "Event Category",
            form_lbl_notes: "Special Requirements / Notes",
            form_placeholder_notes: "E.g., Wheelchair accessibility, high-chair for baby, or custom floral banquet theme...",
            form_btn_submit: "Confirm Table Reservation",
            form_err_name: "Please enter your full name",
            form_err_phone: "Please enter a valid 10-digit number",
            form_err_email: "Please enter a valid email",
            form_err_date: "Please select a valid date",
            form_err_time: "Please select a time",
            
            success_title: "Reservation Request Received!",
            success_desc: "Thank you <strong id=\"success-name\">Arjun</strong>. Our luxury experience managers will review details for <span id=\"success-date\">May 25, 2026</span> at <span id=\"success-time\">19:30</span> and call you at <strong id=\"success-phone\">+91-98765-43210</strong> to confirm within 15 minutes.",
            success_reset_btn: "Make Another Request",
            
            test_subtitle: "Guest Diaries",
            test_title: "Endorsements of Purity & Luxury",
            test1_text: "The dining room with its rich warm timber wood accents feels extremely premium. But the highlight is their food! The Shahi Paneer is an absolute masterpiece of flavors. Absolute purity in every single bite!",
            test1_name: "Meera Singhania",
            test1_desg: "Gourmet Food Critic",
            test2_text: "We organized our daughter's wedding reception at Shree Ram's Imperial Banquet Hall. The stage decorations were exactly like the photographs—grand and majestic. The catering team served 500 guests with flawless hospitality. Highly recommended!",
            test2_name: "Rajesh K. Verma",
            test2_desg: "Proud Father & Businessman",
            test3_text: "I work remotely, and their timber cafe is my absolute sanctuary. The Ivory Cream Cortado is perfectly micro-foamed, and the walnut timber brownie is unbelievably soft and delicious. The quiet, classy vibe is a rare find.",
            test3_name: "Aarav Malhotra",
            test3_desg: "Senior Software Architect",
            
            footer_bio: "Celebrating the finest culinary traditions of India with zero-compromise vegetarian integrity, boutique coffee spaces, and magnificent royal banquet stages.",
            footer_hours_title: "Operational Hours",
            day_weekdays: "Monday - Friday",
            time_weekdays: "11:00 AM - 12:00 Midnight",
            day_weekends: "Saturday - Sunday",
            time_weekends: "11:00 AM - 12:00 Midnight",
            day_lunch: "Dining Hall Lunch",
            day_dinner: "Dining Hall Dinner",
            time_dinner: "07:00 PM - 12:00 Midnight",
            footer_loc_title: "Visit Our Location",
            footer_addr_title: "Hotel Shri Ram Palace",
            footer_addr_line1: "Bypass Chauraha, Suhagi",
            footer_addr_line2: "Katni, Madhya Pradesh 483501",
            footer_map_btn: "Open in Google Maps",
            footer_copyright: "© 2026 Shree Ram Hotel, Restaurant & Cafe. All Rights Reserved. Crafted with absolute devotion.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms & Conditions"
        }
    };

    // Toggle Dropdown Display
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const activeLangText = document.getElementById('active-lang');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langBtn.classList.toggle('open');
        langDropdown.classList.toggle('open');
        const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
        langBtn.setAttribute('aria-expanded', !isExpanded);
    });

    // Click outside to close lang dropdown
    document.addEventListener('click', () => {
        langBtn.classList.remove('open');
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
    });

    // Function to translate components
    const updatePageLanguage = (lang) => {
        document.documentElement.setAttribute('lang', lang);
        
        const translatable = document.querySelectorAll('[data-i18n]');
        translatable.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If it is input/textarea check placeholder mapping
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Mappings for placeholders
                    if (key === 'form_placeholder_name') el.placeholder = translations[lang][key];
                    else if (key === 'form_placeholder_phone') el.placeholder = translations[lang][key];
                    else if (key === 'form_placeholder_email') el.placeholder = translations[lang][key];
                    else if (key === 'form_placeholder_notes') el.placeholder = translations[lang][key];
                    else el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Trigger dynamic label or form adjustments if required
        const currentMode = bookingTypeInput.value;
        if (currentMode === 'table') {
            timeLabel.textContent = lang === 'hi' ? 'पसंदीदा समय' : 'Preferred Time';
            submitBtnText.textContent = lang === 'hi' ? 'तालिका आरक्षित करें' : 'Confirm Table Reservation';
        } else {
            timeLabel.textContent = lang === 'hi' ? 'अनुमानित समय' : 'Est. Start Time';
            submitBtnText.textContent = lang === 'hi' ? 'उत्सव भवन आरक्षित करें' : 'Inquire Venue Availability';
        }
    };

    // Lang Option selection
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedLang = opt.getAttribute('data-lang');
            
            // Toggle active classes
            langOptions.forEach(o => {
                o.classList.remove('active');
                o.setAttribute('aria-selected', 'false');
            });
            opt.classList.add('active');
            opt.setAttribute('aria-selected', 'true');
            
            // Set text label
            activeLangText.textContent = selectedLang === 'hi' ? 'हिन्दी' : 'English';
            langBtn.setAttribute('aria-label', selectedLang === 'hi' ? 'भाषा बदलें' : 'Change Language');
            
            // Update storage and translate page
            localStorage.setItem('shree_ram_lang', selectedLang);
            updatePageLanguage(selectedLang);
        });
    });

    // ==========================================================================
    // 1. Sticky Header & Active Navigation Highlighting
    // ==========================================================================
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Trigger initial state on reload

    // Highlight active nav link on scroll using IntersectionObserver
    const navObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the middle portion
        threshold: 0
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}` || (id === 'hero' && link.getAttribute('href') === '#')) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);
    
    sections.forEach(section => navObserver.observe(section));

    // Smooth scroll for nav links (with closing drawer offset)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href === '#' ? 'hero' : href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile nav menu if open
                    mobileMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    
                    const headerHeight = header.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================================================
    // 2. Mobile Navigation Toggle Drawer
    // ==========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // ==========================================================================
    // 3. Scroll Reveal Animations
    // ==========================================================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
        threshold: 0.1
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, revealObserverOptions);
    
    revealElements.forEach(element => revealObserver.observe(element));

    // ==========================================================================
    // 4. Interactive Gourmet Menu Tab System
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.menu-tab');
    const tabPanels = document.querySelectorAll('.menu-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('aria-controls');
            
            // Update active state of buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            // Switch panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.setAttribute('hidden', 'true');
                if (panel.getAttribute('id') === targetId) {
                    panel.classList.add('active');
                    panel.removeAttribute('hidden');
                }
            });
        });
    });

    // ==========================================================================
    // 5. Interactive Lightbox Photo Gallery with Custom Filters
    // ==========================================================================
    const galleryFilters = document.querySelectorAll('.gallery-filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');
    
    // Gallery Filtering
    galleryFilters.forEach(filterBtn => {
        filterBtn.addEventListener('click', () => {
            const filterValue = filterBtn.getAttribute('data-filter');
            
            // Update active filter btn
            galleryFilters.forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
            
            // Show/Hide items with animation
            galleryCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400); // Match CSS transition duration
                }
            });
        });
    });

    // Trigger initial filter on load based on active tab
    const defaultActiveFilterBtn = document.querySelector('.gallery-filter-btn.active');
    if (defaultActiveFilterBtn) {
        defaultActiveFilterBtn.click();
    }

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let activeImages = []; // Stores currently filtered image list for modal nav
    let currentImgIndex = 0;
    
    const updateActiveImagesList = () => {
        const activeFilter = document.querySelector('.gallery-filter-btn.active').getAttribute('data-filter');
        activeImages = Array.from(galleryCards).filter(card => {
            return activeFilter === 'all' || card.getAttribute('data-category') === activeFilter;
        });
    };
    
    const openLightbox = (cardElement) => {
        updateActiveImagesList();
        currentImgIndex = activeImages.indexOf(cardElement);
        
        const img = cardElement.querySelector('img');
        const caption = img.getAttribute('alt');
        
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
        
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    };
    
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // Unlock background scrolling
    };
    
    const showPrevImage = () => {
        currentImgIndex = (currentImgIndex - 1 + activeImages.length) % activeImages.length;
        const img = activeImages[currentImgIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.getAttribute('alt');
    };
    
    const showNextImage = () => {
        currentImgIndex = (currentImgIndex + 1) % activeImages.length;
        const img = activeImages[currentImgIndex].querySelector('img');
        lightboxImg.src = img.src;
        lightboxCaption.textContent = img.getAttribute('alt');
    };
    
    // Attach gallery click events
    galleryCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
        // accessibility support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(card);
            }
        });
    });
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    // Close on overlay clicking
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation controls
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });

    // ==========================================================================
    // 6. Interactive Booking & Venue Inquiry Form Validation & Submission
    // ==========================================================================
    const toggleTable = document.getElementById('toggle-table');
    const toggleVenue = document.getElementById('toggle-venue');
    const bookingTypeInput = document.getElementById('booking_type');
    
    const timeLabel = document.getElementById('time-label');
    const guestsGroup = document.getElementById('guests-group');
    const eventGroup = document.getElementById('event-group');
    const submitBtnText = document.getElementById('submit-btn-text');
    
    const bookingForm = document.getElementById('booking-form');
    const successBox = document.getElementById('booking-success-box');
    const resetBtn = document.getElementById('btn-reset-booking');
    
    // Form Inputs to Validate
    const guestName = document.getElementById('guest_name');
    const guestPhone = document.getElementById('guest_phone');
    const guestEmail = document.getElementById('guest_email');
    const bookingDate = document.getElementById('booking_date');
    const bookingTime = document.getElementById('booking_time');
    
    // Set minimal date selection to today
    const today = new Date().toISOString().split('T')[0];
    bookingDate.min = today;
    
    // Form Mode Toggling (Table booking vs Venue inquiry)
    const setFormMode = (mode) => {
        bookingTypeInput.value = mode;
        
        if (mode === 'table') {
            toggleTable.classList.add('active');
            toggleTable.setAttribute('aria-selected', 'true');
            toggleVenue.classList.remove('active');
            toggleVenue.setAttribute('aria-selected', 'false');
            
            timeLabel.textContent = 'Preferred Time';
            guestsGroup.style.display = 'flex';
            eventGroup.style.display = 'none';
            eventGroup.setAttribute('hidden', 'true');
            guestsGroup.removeAttribute('hidden');
            submitBtnText.textContent = 'Confirm Table Reservation';
        } else {
            toggleVenue.classList.add('active');
            toggleVenue.setAttribute('aria-selected', 'true');
            toggleTable.classList.remove('active');
            toggleTable.setAttribute('aria-selected', 'false');
            
            timeLabel.textContent = 'Est. Start Time';
            guestsGroup.style.display = 'none';
            guestsGroup.setAttribute('hidden', 'true');
            eventGroup.style.display = 'flex';
            eventGroup.removeAttribute('hidden');
            submitBtnText.textContent = 'Inquire Venue Availability';
        }
        
        clearValidationErrors();
    };
    
    toggleTable.addEventListener('click', (e) => {
        e.preventDefault();
        setFormMode('table');
    });
    
    toggleVenue.addEventListener('click', (e) => {
        e.preventDefault();
        setFormMode('venue');
    });
    
    // Validation Helpers
    const setError = (inputElement, errorMsgId) => {
        const parent = inputElement.parentElement;
        parent.classList.add('error');
    };
    
    const removeError = (inputElement) => {
        const parent = inputElement.parentElement;
        parent.classList.remove('error');
    };
    
    const clearValidationErrors = () => {
        const erroredGroups = bookingForm.querySelectorAll('.form-group.error');
        erroredGroups.forEach(group => group.classList.remove('error'));
    };
    
    const validateForm = () => {
        let isValid = true;
        
        // Name validation (not empty, min 3 letters)
        if (guestName.value.trim().length < 3) {
            setError(guestName);
            isValid = false;
        } else {
            removeError(guestName);
        }
        
        // Phone validation (10 digit format)
        const phoneRegex = /^\+?(\d{1,3})?[- .]?\(?(\d{3})\)?[- .]?(\d{3})[- .]?(\d{4})$/;
        const rawPhone = guestPhone.value.trim().replace(/[- +]/g, '');
        if (!phoneRegex.test(guestPhone.value.trim()) || rawPhone.length < 10) {
            setError(guestPhone);
            isValid = false;
        } else {
            removeError(guestPhone);
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(guestEmail.value.trim())) {
            setError(guestEmail);
            isValid = false;
        } else {
            removeError(guestEmail);
        }
        
        // Date validation (must be filled and not in past)
        if (!bookingDate.value) {
            setError(bookingDate);
            isValid = false;
        } else {
            removeError(bookingDate);
        }
        
        // Time validation
        if (!bookingTime.value) {
            setError(bookingTime);
            isValid = false;
        } else {
            removeError(bookingTime);
        }
        
        return isValid;
    };
    
    // Form Submission Handling
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const spinner = submitBtn.querySelector('.btn-spinner');
            
            // Set loading state
            submitBtn.disabled = true;
            spinner.removeAttribute('hidden');
            
            // Format reservation date for receipt card
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = new Date(bookingDate.value).toLocaleDateString('en-US', options);
            
            // Simulate API request processing
            setTimeout(() => {
                submitBtn.disabled = false;
                spinner.setAttribute('hidden', 'true');
                
                // Populating Success Card details
                document.getElementById('success-name').textContent = guestName.value.trim().split(' ')[0];
                document.getElementById('success-date').textContent = formattedDate;
                document.getElementById('success-time').textContent = bookingTime.value;
                document.getElementById('success-phone').textContent = guestPhone.value.trim();
                
                // Visual transition
                bookingForm.setAttribute('hidden', 'true');
                bookingForm.style.display = 'none';
                successBox.removeAttribute('hidden');
                successBox.style.display = 'block';
            }, 1800);
        }
    });
    
    // Reset Reservation Form
    resetBtn.addEventListener('click', () => {
        bookingForm.reset();
        bookingDate.min = today;
        
        successBox.setAttribute('hidden', 'true');
        successBox.style.display = 'none';
        bookingForm.removeAttribute('hidden');
        bookingForm.style.display = 'block';
        
        // Return to standard Table mode
        setFormMode('table');
    });

    // ==========================================================================
    // 7. Testimonials Auto Slider & Dots Navigation
    // ==========================================================================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    
    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    };
    
    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    };
    
    const startSlideShow = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 6000); // 6 seconds auto cycle
    };
    
    // Dots click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            startSlideShow(); // Reset timer upon user action
        });
    });
    
    // Initialize Slider
    startSlideShow();
    
    // Pause slider if mouse hovers or user focuses on dots
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderWrapper.addEventListener('mouseleave', startSlideShow);

    // ==========================================================================
    // 8. Hero Slideshow Interactivity (Premium Ken Burns Zoom & Autoplay)
    // ==========================================================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroIndicators = document.querySelectorAll('.hero-slideshow-wrapper .indicator');
    const heroPrevBtn = document.getElementById('hero-slide-prev');
    const heroNextBtn = document.getElementById('hero-slide-next');
    const heroSlideshowWrapper = document.querySelector('.hero-slideshow-wrapper');
    let activeHeroSlide = 0;
    let heroSlideTimer;

    const showHeroSlide = (index) => {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroIndicators.forEach(ind => ind.classList.remove('active'));

        heroSlides[index].classList.add('active');
        heroIndicators[index].classList.add('active');
        activeHeroSlide = index;
    };

    const nextHeroSlide = () => {
        const nextIndex = (activeHeroSlide + 1) % heroSlides.length;
        showHeroSlide(nextIndex);
    };

    const prevHeroSlide = () => {
        const prevIndex = (activeHeroSlide - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(prevIndex);
    };

    const startHeroSlideshow = () => {
        clearInterval(heroSlideTimer);
        heroSlideTimer = setInterval(nextHeroSlide, 5000); // 5 seconds autoplay cycle
    };

    // Controller Clicks
    if (heroPrevBtn && heroNextBtn) {
        heroPrevBtn.addEventListener('click', () => {
            prevHeroSlide();
            startHeroSlideshow();
        });
        heroNextBtn.addEventListener('click', () => {
            nextHeroSlide();
            startHeroSlideshow();
        });
    }

    // Indicator Clicks
    heroIndicators.forEach((indicator, idx) => {
        indicator.addEventListener('click', () => {
            showHeroSlide(idx);
            startHeroSlideshow();
        });
    });

    // Initialize & Hover Pauses
    if (heroSlides.length > 0) {
        startHeroSlideshow();
        if (heroSlideshowWrapper) {
            heroSlideshowWrapper.addEventListener('mouseenter', () => clearInterval(heroSlideTimer));
            heroSlideshowWrapper.addEventListener('mouseleave', startHeroSlideshow);
        }
    }

    // ==========================================================================
    // 9. Restaurant Slideshow Interactivity (Premium Ken Burns Zoom & Autoplay)
    // ==========================================================================
    const restaurantSlides = document.querySelectorAll('.restaurant-slide');
    const restaurantIndicators = document.querySelectorAll('.restaurant-indicators .indicator');
    const restaurantPrevBtn = document.getElementById('restaurant-slide-prev');
    const restaurantNextBtn = document.getElementById('restaurant-slide-next');
    const restaurantSlideshowWrapper = document.querySelector('.restaurant-slideshow-wrapper');
    let activeRestaurantSlide = 0;
    let restaurantSlideTimer;

    const showRestaurantSlide = (index) => {
        restaurantSlides.forEach(slide => slide.classList.remove('active'));
        restaurantIndicators.forEach(ind => ind.classList.remove('active'));

        restaurantSlides[index].classList.add('active');
        restaurantIndicators[index].classList.add('active');
        activeRestaurantSlide = index;
    };

    const nextRestaurantSlide = () => {
        if (restaurantSlides.length === 0) return;
        const nextIndex = (activeRestaurantSlide + 1) % restaurantSlides.length;
        showRestaurantSlide(nextIndex);
    };

    const prevRestaurantSlide = () => {
        if (restaurantSlides.length === 0) return;
        const prevIndex = (activeRestaurantSlide - 1 + restaurantSlides.length) % restaurantSlides.length;
        showRestaurantSlide(prevIndex);
    };

    const startRestaurantSlideshow = () => {
        clearInterval(restaurantSlideTimer);
        restaurantSlideTimer = setInterval(nextRestaurantSlide, 5000); // 5 seconds autoplay cycle
    };

    // Controller Clicks
    if (restaurantPrevBtn && restaurantNextBtn) {
        restaurantPrevBtn.addEventListener('click', () => {
            prevRestaurantSlide();
            startRestaurantSlideshow();
        });
        restaurantNextBtn.addEventListener('click', () => {
            nextRestaurantSlide();
            startRestaurantSlideshow();
        });
    }

    // Indicator Clicks
    restaurantIndicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            const idx = parseInt(indicator.getAttribute('data-index'), 10);
            showRestaurantSlide(idx);
            startRestaurantSlideshow();
        });
    });

    // Initialize & Hover Pauses
    if (restaurantSlides.length > 0) {
        startRestaurantSlideshow();
        if (restaurantSlideshowWrapper) {
            restaurantSlideshowWrapper.addEventListener('mouseenter', () => clearInterval(restaurantSlideTimer));
            restaurantSlideshowWrapper.addEventListener('mouseleave', startRestaurantSlideshow);
        }
    }
    
    // Check localStorage cache or default to Hindi (hi)
    const cachedLang = localStorage.getItem('shree_ram_lang') || 'hi';
    const initialActiveOption = document.querySelector(`.lang-option[data-lang="${cachedLang}"]`);
    if (initialActiveOption) {
        initialActiveOption.click();
    } else {
        updatePageLanguage('hi');
    }

    // ==========================================================================
    // 10. Back to Top Button Controller
    // ==========================================================================
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================================================
    // 11. Live Weather Temperature — Ganj Basoda (Open-Meteo API, free, no key)
    // ==========================================================================
    const weatherTempEl = document.getElementById('weather-temp');
    const weatherIconSvg = document.querySelector('.weather-icon-svg');

    if (weatherTempEl) {
        // Ganj Basoda coordinates: 23.85°N, 77.93°E
        const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=23.85&longitude=77.93&current=temperature_2m,weather_code&timezone=Asia%2FKolkata';

        // WMO Weather Code to SVG icon mapping
        function getWeatherIcon(code) {
            // Clear sky
            if (code === 0) return `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
            // Partly cloudy
            if (code >= 1 && code <= 3) return `<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>`;
            // Fog
            if (code >= 45 && code <= 48) return `<path d="M5 5h14M3 10h18M5 15h14M7 20h10"/>`;
            // Rain / drizzle
            if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return `<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="16" y1="16" x2="16" y2="20"/>`;
            // Snow
            if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return `<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/>`;
            // Thunderstorm
            if (code >= 95) return `<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/>`;
            // Default: sun
            return `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
        }

        fetch(weatherUrl)
            .then(res => res.json())
            .then(data => {
                if (data && data.current) {
                    const temp = Math.round(data.current.temperature_2m);
                    weatherTempEl.textContent = `${temp}°C`;

                    // Update icon based on weather condition
                    if (weatherIconSvg && data.current.weather_code !== undefined) {
                        weatherIconSvg.innerHTML = getWeatherIcon(data.current.weather_code);
                    }
                }
            })
            .catch(() => {
                // Silently fail — keep showing "--°C"
                weatherTempEl.textContent = '--°C';
            });
    }
    
});
