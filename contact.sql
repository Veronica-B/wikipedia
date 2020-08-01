DROP DATABASE IF EXISTS contact_db;


CREATE DATABASE contact_db;

USE contact_db;

CREATE TABLE Form(
contact_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(70),
last_name VARCHAR(70),
email VARCHAR(70),
message TEXT,
PRIMARY KEY (contact_id)
);

CREATE TABLE User_changes(
user_id INT NOT NULL AUTO_INCREMENT,
article_id INT,
article_name VARCHAR(255),
section_header VARCHAR(70),
section TEXT,
PRIMARY KEY (user_id)
);



CREATE TABLE Article (
article_id INT NOT NULL AUTO_INCREMENT,
article_name VARCHAR(255),
section_header1 VARCHAR(70),
section1 TEXT,
section_header2 VARCHAR(70),
section2 TEXT,
section_header3 VARCHAR(70),
section3 TEXT,
section_header4 VARCHAR(70),
section4 TEXT,
section_header5 VARCHAR(70),
section5 TEXT,
section_header6 VARCHAR(70),
section6 TEXT,
section_header7 VARCHAR(70),
section7 TEXT,
section_header8 VARCHAR(70),
section8 TEXT,
section_header9 VARCHAR(70),
section9 TEXT,
PRIMARY KEY (article_id)
);

Insert INTO Article (article_id, article_name, section_header1, section1, section_header2, section2 ,section_header3, section3,
section_header4, section4 ,section_header5, section5 ,section_header6, section6 ,section_header7, section7,section_header8, section8,
section_header9, section9)
VALUES(1,"sephora","Overview", "Sephora is a French multinational chain of personal care and beauty stores. Featuring nearly 3,000 brands, along with its own private label, Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color, beauty tools, and haircare.

The company was founded in Limoges in 1970 and is currently based in Paris. Sephora is owned by luxury conglomerate LVMH as of 1997. The name comes from the Greek spelling of Zipporah (Greek: Σεπφώρα, Sepphōra), wife of Moses.",
"History","Sephora first launched in Paris in August 1970. It was acquired by Dominique Mandonnaud in 1993, who merged the purchase with his own perfume chain under the Sephora brand. Mandonnaud is credited for designing and executing Sephora's 'assisted self-service' sales experience, which separated itself from standard retail models for cosmetics by encouraging customers to test products in retail locations before purchasing.
Mandonnaud continued to expand the Sephora brand through the 1990s, opening up its flagship store in Champs Élysées in 1997. In July 1997, Mandonnaud and his partners sold Sephora to LVMH, who expanded the stores globally and bolstered the chain's product offerings to include beauty and cosmetic products.[5] Sephora extended its operation to the Middle Eastern markets in 2007 and has opened over 44 Sephora UAE and KSA stores as well as an eCommerce store. It extends its partnership with its exclusive brands in the region.
On 1 January 2014, Calvin McDonald replaced David Suliteanu as president and chief executive officer of Sephora Americas. Suliteanu was named CEO of Kendo Brands, another business in the LVMH portfolio.
Sephora opened its first United States store in New York City in 1998, its first Canadian store in Toronto in 2004 and first Australian Sephora store in 2014. Its North American headquarters is located in New York City, with corporate offices in San Francisco and Montréal. Sephora currently operates over 430 stores across North America.
￼

Sephora, Toronto Eaton Centre, Toronto, Ontario, Canada
On 26 August 2016, Sephora opened its 400th location in North America on the Magnificent Mile in Chicago. The store is the city's new flagship location.
On 31 March 2017, Sephora opened its largest retail location in North America near Herald Square in New York City. The store is approximately 11,380 square feet and features over 13,000 products. It's one of six Sephora TIP Workshop locations, with interactive services and tools, in North America; the others include San Francisco, Boston, Chicago, Santa Clara Valley, and Toronto.
On 19 November 2018, Sephora signed a long-term lease at Thor Equities’ Town Square Metepec, a new retail and entertainment center in Mexico totaling 1.7 million square feet.",
"Operations",
 "Sephora launched its online store to the U.S. in 1999 and into Canada in 2003. The Canadian head office was opened in February 2007 by Marie-Christine Marchives, a former Sephora U.S. and Sephora France employee. Marie-Christine Marchives returned to France in July 2010 to become the general manager of Sephora France. She was replaced in Canada by Klaus Ryum-Larsen. Sephora currently operates over 2,300 stores in 33 countries worldwide generating over an estimated $4 billion in revenue as of 2013. As of September 2013, the Sephora at Champs Élysées in Paris, France, attracts over six million people a year.

Brands
Sephora features a variety of beauty products from more than 300 brands, including NARS Cosmetics, Make Up For Ever, Too Faced Cosmetics, Anastasia Beverly Hills, Urban Decay, Benefit Cosmetics, Amazing Cosmetics, First Aid Beauty, Lancôme Cosmetics, Sunday Riley Skincare, philosophy, Jo Malone London, Atelier Cologne, YSL Beauty by Yves Saint Laurent, Tatcha, Huda Beauty, Kat Von D, and Bobbi Brown Cosmetics.[26] Sephora also features its own make-up, skincare, beauty tools and accessories. Packaging for the line features the company's elongated flame logo in standard black print.

In 2010, the company debuted fragrance collections with Mary-Kate and Ashley Olsen, known as Elizabeth and James, and a makeup line with Marc Jacobs.

Sephora inside JCPenney
In October 2006, Sephora began opening stores inside JCPenney. Sephora inside JCPenney features some of the same makeup, skincare, and fragrance brands as well as its own product line found in stand alone stores nationwide. Sephora inside JCPenney stores are much smaller than a normal store, usually 1,500 sq ft in size. There are more than 600 Sephora locations in JCPenney stores across the US. In 2017, JC Penney announced the closing of 138 stores nationwide; several of which house a Sephora in JCPenney store. In 2020, there was a moment of tension reagarding the partnership, but it has since been resolved.

Subscription service
In August 2015 it was announced that Sephora would launch a subscription service: Play! By Sephora. The monthly subscription service offers boxes containing sample size products for a monthly fee. Boston, Columbus, and Cincinnati were the only three cities to test the initial service launch in September 2015. The service launched throughout the US in 2016.

For $10 USD billed monthly, each month’s box is a collectible bag that changes each month with five deluxe skin care, makeup, or hair care samples. Each box includes a selection of products based on answers provided by customer in PLAY! profile.

        Sephora terminated PLAY! in April of 2020, replacing it with Sephora Luxe. Like Play!, Luxe gives the opportunity to sample products, but Luxe is ordered monthly and is not a subscription service. Sephora UAE and KSA
Sephora UAE and KSA are regional subdivisions of Sephora. The Middle East head office was opened in February 2006 by Pierre Fayard. Since 2007, over 30 separate Sephora stores have opened across the Middle East region (UAE, KSA, Bahrain, Qatar, Kuwait). Sephora UAE and KSA provide make up and skincare products from notable brands such as Christian Dior, Laura Mercier and Kat Von D in a high tech contemporary retail environment. Sephora’s first Middle East store opened at Seef Mall in Bahrain on 7 January 2007 followed by Festival City, UAE on 1 March 2007 with a further 30 stores opening across the region since.[34] The Sephora store in the Dubai Mall opened in December 2008 and is now ranked as the company’s number two store worldwide after the Paris Flagship store. In 2007 the late Sephora CEO, Jacques Levy expressed a desire to have 100 stores open across the region by 2010. A year later the international financial crisis derailed these ambitions. Levy stepped down in 2011 and died a year later.[37] Despite this early setback Sephora have opened more than 30 more stores and introduced online shopping to the region in November 2016. In December 2017, Sephora opened ‘Gifts Beauty Park, the world's first beauty Festive playground in Dubai.[40] The pop-up store featured fairground and makeup themed games and invited shoppers to sit down with professional Sephora makeup artists to experience the products.[40] In March 2018 Guillaume Motte was announced as the new president of Sephora Europe and Middle East.


Sephora North America
Sephora USA was launched in 1999 and Sephora Canada in 2003.

Sephora storefront in Dalma Mall
Products
Sephora’s Middle East stores stock internationally renowned products by the like of Clinique, Estée Lauder and L’Oreal alongside local brands such as Shiffa Dubai Skin Care and Huda Beauty. According to Forbes, Huda Beauty, founded by Dubai based blogger and business woman Huda Kattan, was the top selling cosmetic brand across Sephora Middle East, in 2018.",
 "Applications", 
 "In 2016, Sephora launched its own all access tablet and smartphone application Designed 'made manifest' by Dennis Hornstra, a software and application designer for Apple. It can be seen as an augmented reality platform. Pocket Contour, one of the digital programs that was rolled out, teaches users how to contour their skin step-by-step depending on their face shape.[45] By uploading a photo, the user can receive a virtual makeover, experimenting with different product and shade combinations.[
", "Acquisitions", "In 2000, Sephora.com purchased the assets of Eve.com for 'high six-figures'.", 
"Controversies", 
"In April 2019, R&B singer SZA accused the store of racial profiling. On May 23, 2019, Sephora announced they would be closing all locations on Wednesday, June 5, 2019, to hold diversity training for its staff. However, the staff training was a part of their 'We Belong To Something Beautiful Campaign' and not the accusations from the singer. The planning and training for this campaign began in late 2018.

In February 2020, an ex-employee of Sephora launched the website workingatsephora.com accusing the store of bullying culture, mishandling of staff complaints, and wage theft",
 "Lawsuits",
 "On 18 November 2014, four customers filed a class action lawsuit against Sephora. The suit alleges that Sephora engaged in racial discrimination by wrongfully deactivating the customer rewards accounts of Asian customers under the pretense that these customers were buying products from Sephora in bulk and reselling them. Sephora identified accounts to deactivate by looking at email domains from @qq.com, @126.com, or @163.com", 
 "Environmental record", 
 "Sephora’s sustainable development initiatives were recognized in December 2015. The company received the Sustainable Brand label, as well as the 2015 R Award for eco-design by the Génération Responsible association. Global Cosmetic News reported that Sephora's newly launched display cases have a 30% lighter metal frame that will reduce CO2 emissions by 220 metric tons", 
 "Awards and honors",
 "In 2010, Women's Wear Daily named Sephora the specialty retailer of the year.

In March 2018, FastCompany named Sephora to the number 36 spot (of 50) on their list of 'World’s Most Innovative Companies', citing its expanded offering of broadly");

Insert INTO Article (article_id, article_name, section_header1, section1, section_header2, section2 ,section_header3, section3,
section_header4, section4 ,section_header5, section5 ,section_header6, section6 ,section_header7, section7,section_header8, section8,
section_header9, section9)
VALUES(2,"Skittles", "Overview", "Skittles is a brand of fruit-flavored candy, currently produced and marketed by the Wrigley Company,[1] a division of Mars, Inc.

Skittles consist of hard sugar shells imprinted with the letter 'S'. The interior consists mainly of sugar, corn syrup, and hydrogenated palm kernel oil along with fruit juice, citric acid, natural and artificial flavors.[2] The confectionery has been sold in a variety of flavor collections, such as Tropical, Wild Berry, Dessert, Sweet Heat and Sour. ",
"History", "Skittles were first made commercially in 1974 by a British company.[3] They were first introduced in North America in 1979 as an import confectionery.[2] In 1982, domestic production of Skittles began in the United States.[2]

Skittles' 'taste the rainbow' theme was created by New York ad agency D'Arcy Masius Benton & Bowles.[4]


Bilingual (English/French) Canadian packet of Skittles
On March 2, 2009, Skittles launched a web-based marketing campaign where their official website became a small overlay with options to view different social media sites in the main area, including its official YouTube channel, a Facebook profile, and a Twitter account.[5] The move was debated by people interested in social media.[6][7]

Skittles marketing has become known for its avant-garde viral marketing techniques, particularly in conjunction with the Super Bowl. In 2018, it produced a Super Bowl commercial that was viewed by only one person.[8] In 2019, it conducted a pre-Super Bowl campaign featuring Skittles Commercial: The Broadway Musical, which was performed one time only at The Town Hall in New York City.[9]

Controversy struck over Skittles temporary color change from the candies signature rainbow to white in efforts of supporting the Gay Rights Movement during the 2016 London Pride. Skittles, iconic for its tagline “Taste the Rainbow,” had been stripped of all color in efforts to promote the legalization of same-sex marriage. The Wrigley Company, a separate representing party of Skittles brand, mass-produced these limited-edition colorless candies in preparation for the month of June, also nationally recognized as LGBT Pride Month.[10] Skittles rainbow themed packaging had also been altered temporarily to complement the achromatic confectionery within. On the back of each monochrome package, the Wrigley Company included an explanation for the company's marketing decision: 'So this is kind of awkward, but we're just gonna go ahead and address the rainbow-colored elephant in the room. You have the rainbow... we have the rainbow... and usually that's just hunky-dory. But this Pride, only one rainbow deserves to be the centre of attention - yours. And we're not going to be the ones to steal your rainbow thunder, no siree.'[10] However, the message intended by the Wrigley Company of promoting the acceptance of nontraditional marriages, was skewed through the candy's representation through the media. The Huffington Post published an article titled “Some People Think Skittles’ All-White Pride Candies Are Racist,”[11] of which explains that by going all-white the company failed to acknowledge the diversity defined by the LGBT community. Every June, Skittles repeats the colorless marketing to spread Pride awareness.

Skittles have been involved in two political incidents in the 2010s. In the aftermath of the shooting of Trayvon Martin, protestors used Skittles, which Martin had reportedly been carrying along with AriZona watermelon fruit juice, as a symbol during rallies. Though Mars' brief statement of condolences was criticized by some outlets, such as Adweek, for being too subdued, Mars' response in 2016 to a Skittles-based image macro (which was posted by Donald Trump's presidential campaign as an analogy for immigration) was praised for its tact and directness. MWWPR said Mars' responses could influence public relations best practices.[12]

In 2009, animal-derived gelatin was removed from Skittles making them suitable for vegetarians and vegans.[13][14]", 
"Varieties", "Skittles are produced in a wide variety of flavors and colours, including sour varieties. Skittles has hinted at new flavor releases on its Facebook page, using such statuses as 'Locking myself in the Rainbow kitchen until I see some results!' A 2011 posting contained confirmation of a new flavor: 'Putting the last touches on a new Skittles flavor. Tweak the Rainbow.'[15]

In the US, in 2013, Skittles replaced the lime-flavored Skittles with green apple, causing a backlash from some consumers. The lime became part of their Darkside packets, which were discontinued in 2015 and followed up by their Orchards packets, which were then discontinued in 2017. Lime is now currently part of the 'Long Lost Lime' packets that came out in summer 2017 and 2018.", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ");
 INSERT INTO Form(contact_id, first_name, last_name, email, message)
VALUES(1,"Fiona", "Cake", "ficake@gmail.com"
, "Jello my name is fiona, and I love wiki"),
(2,"Lai", "Skittles", "Lailes@yahoo.com"
, "I LOVE THE SEPHORA PAGE!"),
(3,"Kevin", "Twizzlers", "KtwizzlersK@yahoo.com"
, "I like donuts!");


 INSERT INTO User_changes(user_id, article_id ,article_name, section_header, section)
VALUES(1, 1, "Sephora", "History", 
"Sephora first launched in Paris in August 1970. It was acquired by Dominique Mandonnaud in 1993,
 who merged the purchase with his own perfume chain under the Sephora brand."),
 (2, 2,"Skittles", "Controversey", "bad for the teeth they say");


SELECT * FROM User_changes;
SELECT * FROM Form;
SELECT * FROM article;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Password'