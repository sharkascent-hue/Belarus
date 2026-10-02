/* ==========================================================
   Belarus — shared business details and stock list.
   Used by index.html (the yard) and tractor.html (each listing).
   Edit this file to change prices, specs, photos and contact info.
   The stock below is EXAMPLE data: replace it with your real tractors.
   ========================================================== */

const CONFIG = {
  phone: "+353 (0)00 000 0000",
  whatsapp: "353000000000",          // international format, digits only, for WhatsApp links
  email: "sales@belarus.ie",
  address: "Yard address, County, Ireland",
  apr: 6.9,
  heroVideo: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ecce44mke0LAFhuakx5m04bD91/bd2b8422-7038-4092-b2a5-f6596c598bf3.mp4",
  storyVideo: "https://d2ol7oe51mr4n9.cloudfront.net/user_3Ecce44mke0LAFhuakx5m04bD91/88f1f723-2295-476a-949e-09d1f4453d1b.mp4"
};

const IMG = "https://d8j0ntlcm91z4.cloudfront.net/user_3Ecce44mke0LAFhuakx5m04bD91/";

const STOCK = [
  { id:"1221", model:"Belarus 1221.3", cond:"new", cat:"utility", year:2026, hp:132, hours:0,
    gearbox:"16F / 8R synchro shuttle", drive:"4WD", lift:"5,500 kg", engine:"6-cylinder turbo diesel", cab:"Air-con cab, air seat",
    pto:"540 / 1000 rpm", hydraulics:"3 spool valves", tyres:"Front 420/70R24 · Rear 520/70R38", price:62500,
    use:"The all-rounder for silage, slurry and heavy tillage.",
    description:"A strong, simple 130 hp tractor that will pull a 3-furrow reversible plough, a 2,500 gallon tanker or a mower conditioner all day. Plenty of lift at the back, a roomy air-con cab and mechanical controls that any local mechanic can work on.",
    features:["Front linkage ready","Air-conditioned cab","Air suspension seat","Push-out hitch","LED work lights","Full manufacturer warranty"],
    img:IMG+"hf_20261002_214109_af2c6b9d-59f5-43c4-b26d-a55eb0ecd085.png",
    gallery:[IMG+"hf_20261002_214109_af2c6b9d-59f5-43c4-b26d-a55eb0ecd085.png", IMG+"hf_20261002_222006_db292479-dc7c-4512-b6a4-d06129027e80.png", IMG+"hf_20261002_221931_b69bd2d1-8698-4e36-861c-d3cdc5ffc53d.png"] },

  { id:"892", model:"Belarus 892", cond:"new", cat:"utility", year:2026, hp:89, hours:0,
    gearbox:"14F / 4R", drive:"4WD", lift:"3,200 kg", engine:"4-cylinder diesel", cab:"Heated cab",
    pto:"540 / 1000 rpm", hydraulics:"2 spool valves", tyres:"Front 360/70R24 · Rear 18.4R34", price:39750,
    use:"Light, nimble and easy on diesel for the mixed farm.",
    description:"The right size for a mixed or suckler farm. Light enough for wet ground, strong enough for a mower, a fertiliser spreader or a 10 ft power harrow, and cheap to run and service.",
    features:["Heated cab","Pick-up hitch","Rear wiper","Twin assistor rams","Full manufacturer warranty"],
    img:IMG+"hf_20261002_214130_02cb4c4a-05ea-4f99-8fe8-9affac051441.png",
    gallery:[IMG+"hf_20261002_214130_02cb4c4a-05ea-4f99-8fe8-9affac051441.png", IMG+"hf_20261002_221930_e0617221-b019-40bf-950f-93c807aaee19.png", IMG+"hf_20261002_221931_77b14f91-7536-43cd-94d0-75c2f4591eb5.png"] },

  { id:"320", model:"Belarus 320.4 + loader", cond:"new", cat:"compact", year:2026, hp:36, hours:0,
    gearbox:"8F / 6R", drive:"4WD", lift:"1,100 kg", engine:"3-cylinder diesel", cab:"Safety cab",
    pto:"540 rpm", hydraulics:"1 spool valve + loader valve", tyres:"Front 8.3R20 · Rear 12.4R24", price:21950,
    use:"Yard scraping, bedding and feeding with a loader fitted.",
    description:"A compact tractor with a front loader already fitted, ready for scraping yards, bedding sheds, moving bales and feeding. Small enough for old sheds and gateways.",
    features:["Front loader with bucket","Euro 8 attachment bracket","Joystick loader control","Road lights","Full manufacturer warranty"],
    img:IMG+"hf_20261002_214110_87c4dd09-598e-4161-adad-149598f37b6e.png",
    gallery:[IMG+"hf_20261002_214110_87c4dd09-598e-4161-adad-149598f37b6e.png", IMG+"hf_20261002_221932_d2f903d2-6932-452c-8061-0d4a1769b63b.png", IMG+"hf_20261002_221931_4e2cd39f-291d-4fd4-8ee9-1c6cb82e02c8.png"] },

  { id:"2522", model:"Belarus 2522", cond:"new", cat:"high", year:2025, hp:250, hours:0,
    gearbox:"24F / 12R", drive:"4WD", lift:"8,000 kg", engine:"6-cylinder turbo diesel", cab:"Air-con cab, air seat",
    pto:"1000 rpm", hydraulics:"4 spool valves", tyres:"Dual wheels front and rear", price:128000,
    use:"Big tillage and contracting work with power to spare.",
    description:"Serious power for tillage and contracting. Pulls wide cultivators, big drills and heavy trailers, with dual wheels to spread the weight on soft Irish ground.",
    features:["Dual wheels","Air-con cab","Air seat","Work light package","Ballast weights","Full manufacturer warranty"],
    img:IMG+"hf_20261002_214109_c1841524-fb65-4373-a65e-3ba80124aa11.png",
    gallery:[IMG+"hf_20261002_214109_c1841524-fb65-4373-a65e-3ba80124aa11.png", IMG+"hf_20261002_221930_48f83bc0-0307-4d4b-b199-cf7d0048f4b0.png", IMG+"hf_20261002_222005_4d699391-05b5-4886-b04c-dddbf28d4795.png"] },

  { id:"1025", model:"Belarus 1025.2", cond:"used", cat:"utility", year:2021, hp:105, hours:1260,
    gearbox:"16F / 8R", drive:"4WD", lift:"4,500 kg", engine:"4-cylinder turbo diesel", cab:"Air-con cab",
    pto:"540 / 1000 rpm", hydraulics:"3 spool valves", tyres:"About 70% left all round", price:41500,
    use:"Low hours, one owner, serviced here since new.",
    description:"One owner from new and serviced in our workshop every year, with the service history to show for it. Tidy cab, no leaks, and tyres with plenty of wear left. Ready to work.",
    features:["Full service history","Front weights","Air-con cab","Pick-up hitch","Pre-delivery inspection done","3-month warranty"],
    img:IMG+"hf_20261002_214110_274f9b58-6061-4769-a95a-c1c8eed9d564.png",
    gallery:[IMG+"hf_20261002_214110_274f9b58-6061-4769-a95a-c1c8eed9d564.png", IMG+"hf_20261002_222004_3bd4c147-dbcd-43dd-aa91-d79c0159808a.png", IMG+"hf_20261002_222006_e05b8a0d-eea1-4b44-b6d1-518b603fdac7.png"] },

  { id:"82", model:"Belarus 82.1", cond:"used", cat:"utility", year:2019, hp:81, hours:2140,
    gearbox:"18F / 4R", drive:"4WD", lift:"3,200 kg", engine:"4-cylinder diesel", cab:"Standard cab",
    pto:"540 / 1000 rpm", hydraulics:"2 spool valves", tyres:"Rears replaced 2024", price:24500,
    use:"The classic MTZ. Simple to fix and hard to kill.",
    description:"The tractor Belarus is famous for. No electronics to go wrong, parts are cheap and easy to get, and it will do the jobs a farm needs every day.",
    features:["New rear tyres (2024)","Front weights","Toplink and check chains","Pre-delivery inspection done","3-month warranty"],
    img:IMG+"hf_20261002_214110_456c45f2-39be-483d-9e69-9a0fef01367f.png",
    gallery:[IMG+"hf_20261002_214110_456c45f2-39be-483d-9e69-9a0fef01367f.png", IMG+"hf_20261002_221930_16d28e68-71f4-45c2-b58d-09426445002b.png", IMG+"hf_20261002_221931_325b524f-9cef-4fd6-a805-ae4d84105199.png"] },

  { id:"622", model:"Belarus 622", cond:"new", cat:"compact", year:2026, hp:62, hours:0,
    gearbox:"16F / 8R", drive:"4WD", lift:"2,500 kg", engine:"4-cylinder diesel", cab:"Low-profile cab",
    pto:"540 / 1000 rpm", hydraulics:"2 spool valves", tyres:"Narrow-track tyres", price:29800,
    use:"Narrow and low for sheds, orchards and tight gateways.",
    description:"Narrow and low, built for tight places: old sheds, orchards, poultry houses and narrow lanes. Still has the lift and PTO for proper work.",
    features:["Narrow track","Low-profile cab","Front weights","Rear wiper","Full manufacturer warranty"],
    img:IMG+"hf_20261002_214110_c44aec98-6c09-4a29-b6cc-c2f38e4265ea.png",
    gallery:[IMG+"hf_20261002_214110_c44aec98-6c09-4a29-b6cc-c2f38e4265ea.png", IMG+"hf_20261002_222004_d905de15-37ce-459c-bb26-db065808d456.png", IMG+"hf_20261002_222004_dc1049ff-bd1f-4daf-b639-4ca5aa85198a.png"] },

  { id:"952", model:"Belarus 952.3", cond:"used", cat:"utility", year:2017, hp:95, hours:3480,
    gearbox:"18F / 4R", drive:"4WD", lift:"3,500 kg", engine:"4-cylinder turbo diesel", cab:"Standard cab",
    pto:"540 / 1000 rpm", hydraulics:"2 spool valves", tyres:"New rear tyres", price:27900,
    use:"Front linkage, new rear tyres, ready for work.",
    description:"A good honest tractor with front linkage fitted, new rear tyres and a fresh service. Ideal for a hedge cutter, a front mower or general farm work.",
    features:["Front linkage","New rear tyres","Fresh service","Pre-delivery inspection done","3-month warranty"],
    img:IMG+"hf_20261002_214109_164928da-16d3-4849-89e7-dfbf97a92170.png",
    gallery:[IMG+"hf_20261002_214109_164928da-16d3-4849-89e7-dfbf97a92170.png", IMG+"hf_20261002_222005_f56795ee-98a7-4739-82ac-390f48238076.png", IMG+"hf_20261002_222005_b2e5800e-be8f-4482-8086-c6c958686e23.png"] }
];

const COUNTIES = ["Carlow","Cavan","Clare","Cork","Donegal","Dublin","Galway","Kerry","Kildare","Kilkenny","Laois","Leitrim","Limerick","Longford","Louth","Mayo","Meath","Monaghan","Offaly","Roscommon","Sligo","Tipperary","Waterford","Westmeath","Wexford","Wicklow","Antrim","Armagh","Derry","Down","Fermanagh","Tyrone"];

const eur = n => "€" + Math.round(n).toLocaleString("en-IE");
function monthly(principal, months, apr = CONFIG.apr){
  if (principal <= 0) return 0;
  const r = apr / 100 / 12;
  return principal * r / (1 - Math.pow(1 + r, -months));
}
const listingUrl = t => "tractor.html?id=" + encodeURIComponent(t.id);
