let products = {
    "aconexp": {
        "name": "Aconex P",
        "short_desc": "Relieve muscle pain, back pain, toothache, headache etc.",
        "type": "Tablets",
        "dosage": "1 tablet thrice daily",
        "composition": "Aclofenac 100mg + Paracetamol 500mg",
        "category": "Pain Reliever",
        "packing": "10x10",
        "bgColor": "#011D5F",
        "frColor": "#FFFFFF",
        "sbColor": "#939BA3",
        "img": "acpnexp.png",
        "details": "Used to reduce pain and inflammation in conditions like rheumatoid arthritis, ankylosing spondylitis, and osteoarthritis.",
    },

    "aconexsp": {
        "name": "Aconex SP",
        "short_desc": "Relieve muscle pain, back pain, toothache, headache etc. with Serratiopeptidase advantage",
        "type": "Tablets",
        "dosage": "1 tablet thrice daily",
        "composition": "Aclofenac 100mg + Paracetamol 500mg + Serratiopeptidase 15mg",
        "category": "Pain Reliever",
        "packing": "",
        "bgColor": "#101535",
        "frColor": "#FFFFFF",
        "sbColor": "#939BA3",
        "img": "aconexsp.png",
        "details": "Relieves pain in conditions like headache, mild migraine, musculoskeletal pain or painful menses. Serratiopeptidase3 enzyme works by breaking down abnormal proteins at the site of inflammation and promotes healing.",
    },

    "rimine": {
        "name": "Rimine",
        "short_desc": "Prevent vitamin B1 deficiency (Beri Beri)",
        "type": "Tablets",
        "dosage": "2 tablets twice daily, or as directed by Physician",
        "composition": "Thiamine 100mg",
        "category": "Supplement",
        "packing": "",
        "bgColor": "#E2E2E2",
        "frColor": "",
        "sbColor": "",
        "img": "rimine.png",
        "details": "Thiamine is important in the breakdown of carbohydrates from foods into products needed by the body. Used to treat or prevent vitamin B1 deficiency and beriberi, a serious condition caused by prolonged lack of vitamin B1.",
    },

    "ritexls": {
        "name": "Ritex LS",
        "short_desc": "Liquefies and loosens thick mucus that can be coughed out easily.",
        "type": "Syrup",
        "dosage": "2 teaspoons thrice daily",
        "composition": "Levosalbutamol, Ambroxol & Guaiphensin Cough Syrup",
        "category": "Cough Remedy",
        "packing": "",
        "bgColor": "#030708",
        "frColor": "#FFFFFF",
        "sbColor": "#939BA3",
        "img": "ritexls.png",
        "details": "Works by thinning the mucus in the air passages; liquefying and loosening thick mucus that can be coughed out easily; temporarily relieving minor pain; relaxing the muscles in the walls of the small airways in the lung",
    },

    "ritext": {
        "name": "Ritex T",
        "short_desc": "Easier to cough out through your mouth.",
        "type": "Syrup",
        "dosage": "2 teaspoons thrice daily",
        "composition": "Levosalbutamol, Guaiphensin, Terbutaline & Menthol cough syrup",
        "category": "Cough Remedy",
        "packing": "",
        "bgColor": "#04244B",
        "frColor": "#FFFFFF",
        "sbColor": "#939BA3",
        "img": "ritext.png",
        "details": "Ambroxol Hydrochloride provides relief to sinus, stuffy nose and ear problems due to flu & provides comfort and easiness to breathe by decreasing swelling in the nose and ears. Terbutaline helps open the airway passage making it easy to breathe properly",
    },

    "anlidoxpf": {
        "name": "Alnidox PF",
        "short_desc": "Treat nausea and vomiting of pregnancy (NVP)",
        "type": "Tablets",
        "dosage": "2 tablets twice daily",
        "composition": "Doxylamine Succinate, Pyridoxine Hydrochloride & Folic Acid Tablets",
        "category": "Pain Reliever",
        "packing": "10x10 tablets",
        "bgColor": "#88A3B6",
        "frColor": "",
        "sbColor": "",
        "img": "anlidoxpf.png",
        "details": "Doxylamine succinate is an antihistamine. Antihistamines lessen the symptoms of allergic reactions and colds, and helps to treat insomnia (hard time sleeping). Pyridoxine hydrochloride is a form of vitamin B6. The combination of 10mg of doxylamine succinate and 10mg of pyridoxine hydrochloride is a medication used to treat nausea and vomiting of pregnancy (NVP), also called morning sickness",
    },

    "pentarosedsr": {
        "name": "Pentarose DSR",
        "short_desc": "Treat gastroesophageal reflux disease (acid reflux) with ease",
        "type": "Capsules",
        "dosage": "1 capsule daily, before breakfast",
        "composition": "Enteric Coated Pantoparazole Sodium & Domperidone Sustained Release Capsules",
        "category": "Gastro Reflux",
        "packing": "",
        "bgColor": "#CEA9A3",
        "frColor": "",
        "sbColor": "",
        "img": "pentarosedsr.png",
        "details": "Domperidone - a prokinetic which works on the upper digestive tract to increase the movement of the stomach and intestines, allowing the food to move more easily through the stomach. Pantoprazole - a proton pump inhibitor (PPI) which works by reducing the amount of acid in the stomach which helps in the relief of acid-related indigestion and heartburn.",
    },

    "alnipaingel": {
        "name": "Alnipain Gel",
        "short_desc": "For instant relief from Pain, sprains and strain",
        "type": "Ointment",
        "dosage": "Application locally",
        "composition": "Diclofenac Diethylamine, Linseed oil, Methyl Salicylate & Menthol Gel",
        "category": "Pain Reliever",
        "packing": "30gm tube",
        "bgColor": "#5F5C63",
        "frColor": "#FFFFFF",
        "sbColor": "#939BA3",
        "img": "alnipaingel.png",
        "details": "An instant pain relief ointment made with a powerful combination of Diclofenac and natural ingredients - Menthol and Linseed Oil. Reduces Inflammation, provides warmth & delivers long-lasting relief from Muscular strains, Joint Pain, Sprains, Neck, Shoulder and Back Pain. ",
    },
}

function populate_catalogue(products) {

    let catalogue_HTML = '';

    for (let key in products) {
        if (products.hasOwnProperty(key)) {
            let val = products[key];

            catalogue_HTML = catalogue_HTML + `
                <div class="col-md-6 col-lg-4 mb-2" data-isotope-item data-category="${val.category}">

                    <div class="card">
                        <a href="javascript:fetch_product_details('${key}')">
                            <img src="assets/img/${val.img}" alt="${val.name + " - " + val.short_desc}" class="card-img-top">
                        </a>
    
                        <div class="card-body d-flex flex-column pb-2">
                            <div class="d-flex justify-content-between mb-1">
                                <div class="text-small d-flex">
                                    <div class="mr-2"><span class="small text-muted">${val.category}, ${val.type}</span></div>
                                </div>
                            </div>
                            <a href="javascript:fetch_product_details('${key}')">
                                <h4>${val.name}</h4>
                            </a>
                            <p class="flex-grow-1">
                                ${val.short_desc}
                            </p>
                        </div>
                    </div>
    
                </div>
            `;

        }
    }

    $("#__catalogue").html(catalogue_HTML);
}

populate_catalogue(products);

function fetch_product_details(prod) {

    let product = products[prod];
    console.log(products);
    console.log(product);

    let product_details_HTML = `
        <section style="background: ${product.bgColor}">
            <div class="container">
                <div class="row justify-content-center text-center mb-3">
                    <div class="col-xl-8 col-lg-9">
                        <h2 class="display-4 mx-xl-6 mb-1" style="color: ${product.frColor}">${product.name}</h2>
                        <p class="lead" style="color: ${product.sbColor}">${product.composition}</p>
                    </div>
                </div>
        
                <div class="row align-items-center justify-content-between o-hidden mb-4">
                    <div class="col-md-6 order-sm-2 mb-5 mb-sm-0" data-aos="fade-left">
                        <img src="assets/img/${product.img}" alt="Image">
                    </div>
                    <div class="col-md-6 pr-xl-5 order-sm-1">
                        <h1 style="color: ${product.frColor}">${product.short_desc}</h1>
                        <p class="lead mb-4" style="color: ${product.sbColor}">${product.details}</p>
                        <h4 class="mb-0" style="color: ${product.frColor}">Dosage</h4>
                        <p style="color: ${product.sbColor}">${product.dosage}</p>
                        <h4 class="mb-0" style="color: ${product.frColor}">Packaging</h4>
                        <p style="color: ${product.sbColor}">${product.type}, ${product.packing}</p>
                    </div>
                </div>
        
                <div class="row justify-content-center text-center">
                    <div class="col-xl-6 col-lg-7 col-md-9">
                        <a href="#" class="m-1 btn btn-secondary" onclick="javascript:bring_catalogue()">Back to catalogue</a>
                    </div>
                </div>
            </div>
        </section>
    `;

    $("#__catalogue_list").hide();
    $("#__navbar").hide();
    $("#__product_details").html(product_details_HTML).show();
}

function bring_catalogue() {
    $("#__catalogue_list").show();
    $("#__navbar").show();
    $("#__product_details").hide()
}