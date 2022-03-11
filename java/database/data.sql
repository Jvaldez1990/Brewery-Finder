BEGIN TRANSACTION;


INSERT INTO breweries (name, address, city, zipcode, phone_number, description, brewery_logo_url, website_url, user_id, hours)
VALUES('5 Seasons Brewing Co - Westside','1000 Marietta St NW Ste 204','Atlanta','30318-0683','4048753232','5 Seasons Westside was one of the first restaurants to open along the Marietta Street Artery corridor, followed by Bocado later in 2009.','https://cdn.vox-cdn.com/thumbor/lIOLD0FgSJgStCbei8lRYc743Pw=/0x0:603x960/920x613/filters:focal(260x560:356x656):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63044630/49072137_10157053583683615_3786274861270171648_n.0.jpg','https://atlanta.eater.com/2019/2/13/18222644/five-seasons-brewpub-closes-westside-atlanta',2,'M-F 5PM-7PM Delivery only (due to Covid-19)');

INSERT INTO breweries (name, address, city, zipcode, phone_number, description, brewery_logo_url, website_url, user_id, hours)
VALUES('EuroBevs','2255 Cumberland Pkwy SE','Atlanta','30339-4515','7704371285','a crisp new bar, brewery and pub','https://images.manta-r3.com/api/claim-this-profile/image-mgr/view/20140219PgOLL6CDMq','https://www.manta.com/c/mx42hvq/eurobevs',2,'M-F 4PM-10PM Sa 12PM - 10PM Su 10AM-10PM');

INSERT INTO breweries (name, address, city, zipcode, phone_number, description, brewery_logo_url, website_url, user_id, hours)
VALUES('Eventide Brewing Co','1015 Grant St SE','Atlanta','30315-2014','4049074543','Eventide Brewing was formed out of friendship and a love of good beer.  Nathan, Haley, and Geoffrey all met at Georgia Southern, and later on began to experiment with homemade pickles, mustard, cheese, and  beer.','https://images.squarespace-cdn.com/content/v1/5a4be488cd39c3d9f4211707/1604595700293-1RK00GG1O0RSZMVPKZ17/unnamed.png?format=1000w','https://www.eventidebrewing.com/',2,'M-T Closed W-F 4PM-10PM Sa 12PM-10PM Su 11PM-6PM');

INSERT INTO breweries (name, address, city, zipcode, phone_number, description, brewery_logo_url, website_url,  user_id,hours)
VALUES('Fire Maker Brewing Company','975 Chattahoochee Ave NW','Atlanta','30318','6787058777','Fire Maker Brewing Company is committed to people and the beers they want to drink. We exist to inspire others and celebrate their achievements. Our purpose is to Create a Spark through everything we do.','https://images.squarespace-cdn.com/content/v1/5c51f6aae74940990354a0c3/1556553771941-TC47E79AAZUP8Y6B5PBB/FMBC-Full-Logo-Large-White.png?format=1500w','https://www.firemakerbeer.com/',2,'M Closed T-T 8AM-10PM F-Sa 8AM-11:30PM Su 12PM-9PM');

INSERT INTO breweries (name, address, city, zipcode, phone_number, description, brewery_logo_url, website_url, user_id, hours)
VALUES('Gordon Biersch Brewery Restaurant - Atlanta','3242 Peachtree Rd NE','Atlanta','30305-2425','4042640253','Step inside our 40-seat tasting room and brewhouse thoughtfully designed and constructed from reclaimed materials.','https://untappd.akamaized.net/venuelogos/venue_4006_acf72d80_bg_176.png?v=1','https://www.gordonbierschrestaurants.com/airport-locations',2,'T-F 4PM-10PM Sa 12PM-10PM Su 12PM-6PM');

INSERT INTO breweries (name, address, city, zipcode, phone_number, description, brewery_logo_url, website_url,  user_id,hours)
VALUES('Johnnie MacCrackens Celtic Firehouse Pub, Inc.','15 Atlanta Street','Atlanta','30060-1985','7705907868','IT WAS HERE BEFORE YOU WERE BORN','https://static.wixstatic.com/media/275d1f_dfcabe2dd397402da9e93b5c27a8a542.png/v1/fill/w_864,h_454,al_c,lg_1,enc_auto/275d1f_dfcabe2dd397402da9e93b5c27a8a542.png','https://www.johnniemaccrackens.com/',2,'M 4PM-1AM T-W 11AM-1AM TH-St');

--Beers--6--

--- bookhouse brewery
INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Get Yer Oats', 6.5,'Oatmeal Stout', 'Get yer oats! Our rich, soft oatmeal stout comes across as almost too much,too sweet and satisfying, so we dialed it back with a hit of Ceylon cinnamon and piles of toasted nuts: black walnuts, pecans, and hazelnuts. Paired together, the whole thing is balanced and soft , with gentle wisps of nutty oatmeal, browned toast, and squishy caramel. Settle in for a spell and plunge these roasty black depths.'
, 'https://bookhouse-brewing-llc.square.site/uploads/1/2/6/2/126287558/s706640680989578270_p357_i1_w1218.jpeg', true, 1);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Black is Beautiful', 9,
'Oatmeal Stout', 'Our version of Black is Beautiful hews closely to the source material, figuring that the time at hand is that of listening. BIPOC-owned breweries are less than 1% of the overall US brewery scene, so who are we to dominate the stage when so many others have so much to say? Brewed with 7 types of malt for a massive, sticky, high-alcohol imperial stout, deep black in color. Flavor/aroma of burnt sugar, dark roast coffee, figs, and a touch of warming alcohol. Proceeds go to Cleveland NAACP to help in their efforts towards building a better world.',
 'https://bookhouse-brewing-llc.square.site/uploads/1/2/6/2/126287558/s706640680989578270_p294_i1_w1650.jpeg',
  true, 1);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Whoops! Down Under', 9.0,
'NE IPA', 'Cruise down the flavor highway with these bright and bold hops from the Southern Hemisphere. Bright orange juice with passionfruit and guava hints in the aroma are followed by rich malt and a soft, juicy hop finish. Triple NEIPA-style beer made with Australian Galaxy, New Zealand Nelson Sauvin, and El Dorado hops'
, 'https://bookhouse-brewing-llc.square.site/uploads/1/2/6/2/126287558/s706640680989578270_p367_i1_w1080.jpeg'
 , false, 1);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Fortitude', 6.8,
'Imperial Witbier', 'Our winter seasonal beer, this double/Imperial witbier is designed with the cold months in mind. We started with a strong interpretation of the classic Belgian country beer, then smoothed off the edges with a silky-soft body, with just enough residual sweetness to keep the magic hidden. Intense orange peel aromatics, pillowy puffs of wheat and oats, and a refreshing subtle herbal spice in the finish. Build up your Fortitude and  watch the days fly by.',
  'https://bookhouse-brewing-llc.square.site/uploads/1/2/6/2/126287558/s706640680989578270_p367_i1_w1080.jpeg'
 , false, 1);

 -- Boss Dog Brewing
INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Dog Pound Brown', 5.8,
'Brown Ale', 'Nutty biscuit and mild chocolate',
'no img' , true, 2);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Jobu', 6.0,
'Spiced Hazy Juicy IPA', 'Tropical IPA infused with spicy Cerrano peppers',
'no img', true, 2);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Holy Toledo Pilsner', 5.4,
'German Pilsner', 'German style, noble hopped Pilsener. Clean & refreshing',
'no img' , true, 2);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Put-N-Berry', 5.5,
'Fruit Beer', 'Crisp Honey Ale. Touch of cracker with fresh Raspberry tartness',
'no img' , true, 2);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Millennial Hipster', 6.0,
'Hazy Juicy IPA', 'Big juicy sweetness and tropical citrus. This Hazy IPA is tighter than your skinny jeans and hotter than a wool hat in the summer',
'no img' , true, 2);

 -- Brick and Barrel Brewing
INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Bitter Chief IPA', 6.9,
'IPA', 'For our bitter Tribe fans, we almost got that series win. In the meantime, drink some local craft beer and enjoy. Light cooper color. Nice bitterness with refreshing citrus and grassy flavors and aromas. Malty finish balancing out the bitterness',
'no img' , true, 3);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Big Chief Imperial IPA', 8.7,
'Imperial IPA', 'Big hoppy Imperial IPA. Malt backbone with a robust hop aroma and flavor from kettle and fermenter dry-hopping.',
'no img' , true, 3);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Rally Possum', 7.4,
'Imperial Brown Ale', 'Hoppy imperial brown ale with nice citrus, chocolate hazelnut roast aromas and flavors. Just in time for a fantastic Browns season.',
'no img', true, 3);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Pinot Saison', 6.3,
'Farmhouse Saison', 'Classic farmhouse saison ale, phenolic pepper and tropical fruit form the Saison yeast strain. Pinot Noir wine must co fermented to give aromas and flavors of raspberry, strawberry and red grapes giving a red wine aroma.',
'no img', true, 3);

 -- Collision Bend Brewery-19-
INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('C-Town', 6.7,
'American IPA', 'No description',
'no img', true, 4);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Hope Flows', 5.2,
'Kolsch', 'No description',
'no img', true, 4);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Home Before 10', 7.3,
'Farmhouse Saison', 'No description',
'no img', true, 4);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Bollard Pull', 5.8,
'American Porter', 'No description',
'https://untappd.akamaized.net/site/beer_logos/beer-2222654_132f6_sm.jpeg'
, true, 4);

 -- Forest City Brewery
INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Black Betsy Black IPA', 5.6,
'Black IPA', 'This beer is named after Shoeless Joe Jackson’s primary bat. Betsy is brewed with classic hops (Columbus, Chinook, Cascade) paired with a stout-like malt bill making this beer a balanced and flavorful home run!',
'no img', true, 5);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Berg-A-Horn Bock', 6.5,
'Bock', 'Our traditional Bock is a strong, dark, lightly hopped brew of German origin. Named after our giant Sycamore tree in the original beer garden. Berg-A-Horn means Sycamore in German',
'no img', true, 5);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Duck Island Amber Ale', 5.5,
'Amber Ale', 'Crafted from American ingredients, this deep copper ale is anchored by a strong malt backbone containing subtly delicious hints of caramel and fruit. This Forest City staple has a medium intensity hop flavor with citrus hop notes. A frothy headed classic that is sure to find its’ way into your  stomach and into your cooler!',
'no img', true, 5);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('I Rish I Had Another Red Ale', 4.2,
'Irish Red Ale', 'This brew is a collaboration with our homebrewing friends Jay and Eli of SNOBS Homebrew Club. Their multi-award winning recipe is our first pro-am offering and one fine red ale.',
'no img', true, 5);

-- Hansa Brewery
INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Mr. Meeseeks', 4.6,
'Blueberry Gose', 'This bier is meant to serve the one purpose of quenching your thirst. Fulfilling fruity taste with a lemony tartness. Hints of coriander and a touch of salt that follows through with a fantastic blueberry taste!',
'no img', true, 6);

--INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
--VALUES ('Bye Felicia', 5.2,
--'Nut Brown Ale', 'The perfect bier to say “Bye!” to last year and “Hello!” to a fresh start! Complex malt profile with chocolate malt, honey malt, and crystal rye. Very sessionable and a touch on the sweet side.',
--'no img', true, 6);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('Black Flag', 4.7,
'Schwarzbier', 'Dark brown German lager with an undertone of caramel, toffee, and light roast coffee. Clean and smooth in taste with some floral German hop taste',
'no img', true, 6);

INSERT INTO beers (name, abv, type, info, img_url, is_active, brewery_id)
VALUES ('S.I.P.A.', 7.0,
'German IPA', 'A German interpretation of an American IPA with a caramel malt backbone. We use five new German hop varieties that give it a melon and subtle strawberry character. Assertive bitterness and refreshingly floral.',
'no img', true, 6);

--Reviews--

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Greatest Beer Ever',
'This is the best beer in the world!',
5,now(), 1);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Not enough Oats',
'I didnt get my oats for this. 4/10 would not recommend',
2, now(), 1);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('LOVE',
'Yes',
5,now(), 2);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Not enough Black',
'I didnt get my Black for this. 4/10 would not recommend',
2,now(), 2);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Whoops! All Down Under!',
'Pretty good. Not too sweet. Not too salty. I think thats good for a beer, right?',
5,now(), 3);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Not enough down under',
'I didnt get my down for this. 6/10 would not recommend',
3,now(), 3);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Fills me with Determi-wait, no, Fortitude',
'Seeing an outdated Undertale reference fills me with Fortitude',
4,now(), 4);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Not enough Fortitude',
'I didnt get my fortitude for this. 4/10 would not recommend',
2,now(), 4);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Brown for sure',
'Beer is brown, sometimes, so thats good, right?',
4,now(), 5);

INSERT INTO reviews (name, description, rating, create_date, beer_id) VALUES
('Not enough dog',
'I didnt get my dog for this. 4/10 would not recommend',
2,now(), 5);

COMMIT TRANSACTION;