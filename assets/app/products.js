let products = {
    "aconexp": {
        "name": "Aconex P",
        "short_desc": "Relieve muscle pain, back pain, toothache, headache etc.",
        "type": "Tablets",
        "dosage": "1 tablet thrice daily",
        "composition": "Aclofenac 100mg + Paracetamol 500mg",
        "category": "Pain Reliever",
        "packing": "1x10x10 tablets",
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
        "packing": "1x10x10 tablets",
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
        "packing": "1x10x10 tablets",
        "bgColor": "#E2E2E2",
        "frColor": "#000",
        "sbColor": "#000",
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
        "packing": "100ml bottle",
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
        "packing": "100ml bottle",
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
        "packing": "1x10x10 tablets",
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
        "packing": "1x10x10 capsules",
        "bgColor": "#CEA9A3",
        "frColor": "#000",
        "sbColor": "#000",
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

    "nystan": {
        "name": "Nystan 100 / 200",
        "short_desc": "Treat a range of fungal infections",
        "type": "Capsules",
        "dosage": "As directed by physician",
        "composition": "Itraconazone Capsules",
        "category": "Anti-fungal",
        "packing": "10x1x4 Capsules",
        "bgColor": "#F0DFD0",
        "frColor": "#000",
        "sbColor": "#000",
        "img": "nystan.png",
        "details": "Itraconazole is used to treat a variety of fungal infections. It belongs to a class of drugs known as azole antifungals. It works by stopping the growth of fungi.",
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
                        <a onclick="javascript:fetch_product_details('${key}')" data-toggle="modal" data-target="#__product_details">
                            <img src="assets/img/${val.img}" alt="${val.name + " - " + val.short_desc}" class="card-img-top">
                        </a>
    
                        <div class="card-body d-flex flex-column pb-2">
                            <div class="d-flex justify-content-between mb-1">
                                <div class="text-small d-flex">
                                    <div class="mr-2"><span class="small text-muted">${val.category}, ${val.type}</span></div>
                                </div>
                            </div>
                            <a onclick="javascript:fetch_product_details('${key}')" data-toggle="modal" data-target="#__product_details">
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
        <div class="modal-dialog" role="document">
          <div class="modal-content border-0 text-light" style="background: ${product.bgColor}">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg icon bg-white" data-src="assets/img/icons/interface/cross.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M16.2426 6.34311L6.34309 16.2426C5.95257 16.6331 5.95257 17.2663 6.34309 17.6568C6.73362 18.0473 7.36678 18.0473 7.75731 17.6568L17.6568 7.75732C18.0473 7.36679 18.0473 6.73363 17.6568 6.34311C17.2663 5.95258 16.6331 5.95258 16.2426 6.34311Z" fill="#212529"></path>
                    <path d="M17.6568 16.2426L7.75734 6.34309C7.36681 5.95257 6.73365 5.95257 6.34313 6.34309C5.9526 6.73362 5.9526 7.36678 6.34313 7.75731L16.2426 17.6568C16.6331 18.0473 17.2663 18.0473 17.6568 17.6568C18.0474 17.2663 18.0474 16.6331 17.6568 16.2426Z" fill="#212529"></path>
                </svg>
              </button>
              
              
              <div class="container">
                <div class="row justify-content-center text-center mb-3">
                    <div class="col-xl-8 col-lg-9">
                        <h2 class="display-4 mx-xl-6 mb-1" style="color: ${product.frColor}">${product.name}</h2>
                        <p class="lead" style="color: ${product.sbColor}">${product.composition}</p>
                    </div>
                </div>
        
                <div class="row align-items-center justify-content-between o-hidden mb-7">
                    <div class="col-md-6 order-sm-2 mb-5 mb-sm-0" data-aos="fade-left">
                        <img src="assets/img/${product.img}" alt="Image">
                    </div>
                    <div class="col-md-6 pr-xl-5 order-sm-1">
                        <h1 style="color: ${product.frColor}">${product.short_desc}</h1>
                        <p class="lead mb-4" style="color: ${product.sbColor}">${product.details}</p>
                        <h4 class="mb-0" style="color: ${product.frColor}">Dosage</h4>
                        <p style="color: ${product.sbColor}">${product.dosage}</p>
                        <h4 class="mb-0" style="color: ${product.frColor}">Packaging</h4>
                        <p style="color: ${product.sbColor}">Available in ${product.packing}</p>
                    </div>
                </div>
        
                <div class="row justify-content-center text-center mt-4">
                    <a href="#" class="btn btn-white" data-dismiss="modal">Back to catalogue</a>
                </div>
            </div>
              
            </div>
          </div>
        </div>
    `;

    $("#__product_details").html(product_details_HTML); //.show();
}
