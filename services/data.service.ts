import { Injectable, OnInit } from '@angular/core';

export interface Product {
  id: string;
  icon?: string;
  description: string;
  manufacturer: string;
  price: number;
  orderHistory?: OrderHistory[];
};

export interface Order {
  date: Date;
  price: number;
  id: string;
  products: Product[];
  customer: Customer;
};

export interface OrderHistory {
  date: Date;
  orderId: string;
  customerId: string;
}

export interface Customer {
  firstName: string;
  lastName: string;
  id: string;
  firm: string;
  orders?: Order[];
  products?: ProductHistory[];
};

export interface ProductHistory extends Product {
  count: number;
}

export interface Filter {
  key: string;
  text: string;
}

export interface NavOption {
  link: string;
  text: string;
}

export interface SortOptions {
  key: string;
  dir: string;
}

@Injectable()
export class DataService implements OnInit {

  nav: NavOption[] = [
    { link: '/', text: 'Home'},
    { link: '/customers', text: 'Customers'},
    { link: '/orders', text: 'Orders'},
    { link: '/products', text: 'Products'}
  ];

  customers: Customer[] = [
  	{ firstName: 'Aquila', lastName: 'Lowe', id: '5558-6996-6581-6298', firm: 'Velit Pellentesque Ultricies LLC'},
  	{ firstName: 'Slade', lastName: 'Chan', id: '5595-3626-9517-0047', firm: 'Fusce Mi Lorem Company'},
  	{ firstName: 'Odysseus', lastName: 'Hudson', id: '5115-6529-2679-0899', firm: 'Tellus Limited'},
  	{ firstName: 'Hu', lastName: 'Mason', id: '5384-0136-8854-4350', firm: 'Et Foundation'},
  	{ firstName: 'Porter', lastName: 'Harrison', id: '5314-6915-9587-5267', firm: 'Mauris Vestibulum LLP'},
  	{ firstName: 'Aladdin', lastName: 'Sanchez', id: '5269-1571-6502-6678', firm: 'Vel Turpis Aliquam Ltd'},
  	{ firstName: 'Drew', lastName: 'Mcclure', id: '5200-7577-1486-8926', firm: 'Non Nisi LLC'},
  	{ firstName: 'Tucker', lastName: 'Pope', id: '5227-7512-5473-5677', firm: 'Risus Consulting'},
  	{ firstName: 'Vladimir', lastName: 'Clarke', id: '5454-0680-2085-7832', firm: 'Pede Ac Urna LLP'},
  	{ firstName: 'Austin', lastName: 'Shields', id: '5418-5917-8616-2530', firm: 'Libero Nec Corp.'},
  	{ firstName: 'Carl', lastName: 'Crosby', id: '5281-8133-6620-4720', firm: 'Lacinia Sed Industries'},
  	{ firstName: 'Conan', lastName: 'Vega', id: '5137-7902-7674-5636', firm: 'Nec Metus Facilisis Inc.'},
  	{ firstName: 'Jin', lastName: 'Soto', id: '5123-9652-9468-6634', firm: 'Duis Foundation'},
  	{ firstName: 'Arthur', lastName: 'Carson', id: '5324-7211-2702-8461', firm: 'Volutpat Ornare Corporation'},
  	{ firstName: 'Ahmed', lastName: 'Henson', id: '5169-6685-6097-7860', firm: 'Felis Adipiscing LLP'},
  	{ firstName: 'Stephen', lastName: 'Maynard', id: '5501-7068-9964-9482', firm: 'Dignissim Magna Industries'},
  	{ firstName: 'James', lastName: 'Riggs', id: '5579-7028-1083-3740', firm: 'Eget Foundation'},
  	{ firstName: 'Ivan', lastName: 'Adams', id: '5232-4594-5857-2606', firm: 'Donec Nibh Quisque Foundation'},
  	{ firstName: 'Randall', lastName: 'Fuentes', id: '5185-4716-4098-0826', firm: 'Sem Inc.'},
  	{ firstName: 'Ulric', lastName: 'Mccormick', id: '5272-2091-4405-0223', firm: 'In Consectetuer Ipsum Incorporated'},
  	{ firstName: 'Kirk', lastName: 'Navarro', id: '5161-6339-3427-2412', firm: 'Vel Consulting'},
  	{ firstName: 'Acton', lastName: 'Sims', id: '5592-4765-8177-2774', firm: 'Nec Tempus Limited'},
  	{ firstName: 'Daquan', lastName: 'Riggs', id: '5550-1867-4321-9891', firm: 'Lobortis Foundation'},
  	{ firstName: 'Arsenio', lastName: 'Mcgee', id: '5204-0009-6182-0241', firm: 'A Mi Fringilla Consulting'},
  	{ firstName: 'Castor', lastName: 'Vega', id: '5124-8101-1541-7125', firm: 'Adipiscing Elit LLP'},
  	{ firstName: 'Arsenio', lastName: 'Goodwin', id: '5412-7546-0768-7947', firm: 'Porttitor Eros Nec PC'},
  	{ firstName: 'Emerson', lastName: 'Travis', id: '5279-7448-6675-6402', firm: 'Quis Tristique Ac LLP'},
  	{ firstName: 'Hayden', lastName: 'Reilly', id: '5312-1047-9779-7620', firm: 'Nunc Risus Varius LLP'},
  	{ firstName: 'Yuli', lastName: 'Craig', id: '5534-2250-2242-2544', firm: 'Venenatis Institute'},
  	{ firstName: 'Preston', lastName: 'Frank', id: '5155-2034-7413-7116', firm: 'Est Ltd'},
  	{ firstName: 'Travis', lastName: 'Wilkerson', id: '5556-0871-2932-4228', firm: 'Urna Institute'},
  	{ firstName: 'Owen', lastName: 'Noel', id: '5346-7219-8232-3019', firm: 'Dignissim Ltd'},
  	{ firstName: 'Logan', lastName: 'Houston', id: '5535-8182-6431-2578', firm: 'Amet Consectetuer Adipiscing LLP'},
  	{ firstName: 'Xander', lastName: 'Fitzgerald', id: '5362-6136-0226-2264', firm: 'Semper Et Lacinia LLP'},
  	{ firstName: 'Hammett', lastName: 'Browning', id: '5563-1569-0230-8731', firm: 'Vitae LLP'},
  	{ firstName: 'Allen', lastName: 'Meyers', id: '5589-5256-3375-0991', firm: 'Vitae Corp.'},
  	{ firstName: 'Simon', lastName: 'Underwood', id: '5153-1083-9681-7558', firm: 'Nunc Ac Associates'},
  	{ firstName: 'Keegan', lastName: 'Slater', id: '5339-7207-3953-2186', firm: 'Velit Eget Consulting'},
  	{ firstName: 'Nero', lastName: 'Mcbride', id: '5353-7229-0718-6812', firm: 'Vestibulum Limited'},
  	{ firstName: 'Herman', lastName: 'Peck', id: '5393-5007-4377-7099', firm: 'Aenean Associates'},
  	{ firstName: 'Josiah', lastName: 'Koch', id: '5566-3581-9884-2855', firm: 'Quisque Company'},
  	{ firstName: 'Robert', lastName: 'Soto', id: '5497-3574-5404-8193', firm: 'Luctus Sit Amet LLC'},
  	{ firstName: 'Reuben', lastName: 'Morse', id: '5465-4580-5638-7506', firm: 'Vitae Ltd'},
  	{ firstName: 'Porter', lastName: 'Dale', id: '5118-3429-4900-2749', firm: 'Non Incorporated'},
  	{ firstName: 'Robert', lastName: 'Willis', id: '5368-1940-9774-0563', firm: 'Odio Auctor Ltd'},
  	{ firstName: 'Josiah', lastName: 'Coleman', id: '5351-9612-2989-2473', firm: 'Lectus Pede Et LLC'},
  	{ firstName: 'Hyatt', lastName: 'Moore', id: '5541-0701-6703-8007', firm: 'Elit Erat Corporation'},
  	{ firstName: 'Julian', lastName: 'Porter', id: '5109-9351-8322-8481', firm: 'Faucibus Id Company'},
  	{ firstName: 'Luke', lastName: 'Sandoval', id: '5119-6613-5213-2738', firm: 'Lacinia Inc.'},
  	{ firstName: 'Castor', lastName: 'Kirkland', id: '5204-6416-4234-7177', firm: 'Penatibus Et Company'},
  	{ firstName: 'Dean', lastName: 'Cash', id: '5308-4965-5311-7761', firm: 'Varius Nam Ltd'},
  	{ firstName: 'Thor', lastName: 'Duffy', id: '5537-5176-5460-9480', firm: 'Lacinia Corporation'},
  	// { firstName: 'David', lastName: 'Chavez', id: '5566-9578-7031-1616', firm: 'Pellentesque Habitant Morbi Consulting'},
  	// { firstName: 'Zachery', lastName: 'Valencia', id: '5208-3414-6860-8697', firm: 'Consectetuer Cursus Et Limited'},
  	// { firstName: 'Richard', lastName: 'Cash', id: '5156-7183-7414-2410', firm: 'Amet Consectetuer Adipiscing Associates'},
  	// { firstName: 'Cooper', lastName: 'Witt', id: '5570-7403-5715-1927', firm: 'Eleifend Consulting'},
  	// { firstName: 'Zeph', lastName: 'Barton', id: '5412-7093-9545-9388', firm: 'Ultrices Sit Associates'},
  	// { firstName: 'Jonas', lastName: 'Smith', id: '5401-9202-7968-8629', firm: 'Mauris Rhoncus Id Consulting'},
  	// { firstName: 'Cyrus', lastName: 'Robertson', id: '5493-8424-1577-8115', firm: 'Quis Lectus Nullam Inc.'},
  	// { firstName: 'Emmanuel', lastName: 'Roy', id: '5478-9860-4506-1795', firm: 'Non Feugiat Inc.'},
  	// { firstName: 'Noah', lastName: 'Pruitt', id: '5399-2665-7551-8159', firm: 'Arcu Sed Et Corporation'},
  	// { firstName: 'Fulton', lastName: 'Jenkins', id: '5106-1393-7334-8034', firm: 'Nunc Id Enim Ltd'},
  	// { firstName: 'Ryder', lastName: 'Blankenship', id: '5338-3414-0592-0760', firm: 'Malesuada Fringilla LLC'},
  	// { firstName: 'Hector', lastName: 'Garcia', id: '5548-0382-3572-6823', firm: 'Nam Inc.'},
  	// { firstName: 'Duncan', lastName: 'Hogan', id: '5416-9216-0533-9021', firm: 'Dolor Sit Amet LLP'},
  	// { firstName: 'Devin', lastName: 'Guerrero', id: '5231-7522-9689-1498', firm: 'Erat Eget Ipsum Inc.'},
  	// { firstName: 'Alan', lastName: 'Spence', id: '5555-4983-4246-2771', firm: 'Curabitur Vel Lectus Consulting'},
  	// { firstName: 'Justin', lastName: 'Branch', id: '5592-4772-0558-6160', firm: 'Risus Associates'},
  	// { firstName: 'Leroy', lastName: 'Camacho', id: '5535-3982-4403-1366', firm: 'Semper Pretium Neque Institute'},
  	// { firstName: 'George', lastName: 'Stokes', id: '5241-4264-8221-0411', firm: 'Interdum LLC'},
  	// { firstName: 'Cullen', lastName: 'Puckett', id: '5586-2191-0530-7612', firm: 'Donec Incorporated'},
  	// { firstName: 'Seth', lastName: 'Kirk', id: '5148-0114-2539-9481', firm: 'Mattis Integer Corp.'},
  	// { firstName: 'Ray', lastName: 'Lancaster', id: '5153-9953-5096-8199', firm: 'Tortor Dictum Corporation'},
  	// { firstName: 'Drew', lastName: 'Kelley', id: '5138-5302-7506-7577', firm: 'Curabitur Foundation'},
  	// { firstName: 'James', lastName: 'Bowen', id: '5226-0191-8014-1464', firm: 'Est Mauris LLP'},
  	// { firstName: 'Flynn', lastName: 'Lang', id: '5461-9283-7661-7398', firm: 'Metus In Nec Incorporated'},
  	// { firstName: 'Uriah', lastName: 'Gallagher', id: '5129-5488-8057-5108', firm: 'Lacinia LLP'},
  	// { firstName: 'Martin', lastName: 'Whitley', id: '5406-8629-8567-9150', firm: 'Aenean Consulting'},
  	{ firstName: 'Hall', lastName: 'Campbell', id: '5484-6836-4288-9841', firm: 'Risus Quis Inc.'},
  	{ firstName: 'Xander', lastName: 'Allen', id: '5222-3091-8046-9955', firm: 'Lacus Mauris Ltd'},
  	{ firstName: 'Tate', lastName: 'Conway', id: '5432-1502-8584-5814', firm: 'Ac Risus LLC'},
  	{ firstName: 'Kadeem', lastName: 'Parrish', id: '5544-1625-0232-7208', firm: 'Etiam Corp.'},
  	{ firstName: 'Allistair', lastName: 'Koch', id: '5388-4212-1907-3128', firm: 'Phasellus Inc.'},
  	{ firstName: 'Elliott', lastName: 'Conrad', id: '5238-5545-6249-2933', firm: 'Dui Nec Urna LLC'},
  	{ firstName: 'Herman', lastName: 'Cabrera', id: '5313-1966-0812-7798', firm: 'Metus Industries'},
  	{ firstName: 'Calvin', lastName: 'Ferguson', id: '5300-5851-7475-1657', firm: 'Rutrum Justo Company'},
  	{ firstName: 'Brock', lastName: 'Horn', id: '5315-0903-7944-9861', firm: 'Duis Mi Enim LLC'},
  	{ firstName: 'Dieter', lastName: 'Yates', id: '5319-7072-4541-6974', firm: 'Tristique Neque Venenatis LLP'},
  	{ firstName: 'Emmanuel', lastName: 'Cash', id: '5156-7644-9283-0288', firm: 'Quis Ltd'},
  	{ firstName: 'Keegan', lastName: 'Stanley', id: '5381-3557-7180-4941', firm: 'Ut Eros Non LLC'},
  	{ firstName: 'Malachi', lastName: 'Hester', id: '5518-1056-0238-5958', firm: 'Amet Incorporated'},
  	{ firstName: 'Lane', lastName: 'Sellers', id: '5587-9350-9632-8007', firm: 'Libero Mauris Aliquam PC'},
  	{ firstName: 'Bernard', lastName: 'Collins', id: '5420-8935-1602-0095', firm: 'Nullam Ut Nisi Industries'},
  	{ firstName: 'Kaseem', lastName: 'Diaz', id: '5216-5145-2175-6451', firm: 'Sed LLC'},
  	{ firstName: 'Hamish', lastName: 'Bullock', id: '5125-6942-3943-2890', firm: 'Orci PC'},
  	{ firstName: 'Flynn', lastName: 'Odom', id: '5477-7680-5520-8750', firm: 'Eu PC'},
  	{ firstName: 'Elliott', lastName: 'Harmon', id: '5473-9843-0609-1416', firm: 'Pede Sagittis Augue LLP'},
  	{ firstName: 'Troy', lastName: 'Blanchard', id: '5267-7340-9920-4670', firm: 'Eget Metus Eu Corporation'},
  	{ firstName: 'Camden', lastName: 'Silva', id: '5226-5394-8277-6782', firm: 'Nunc Mauris Sapien LLP'},
  	{ firstName: 'Raja', lastName: 'Christian', id: '5582-1108-6426-1526', firm: 'Neque Sed Ltd'}
  ];

  products: Product[] = [
    { price: 298.84, id: "55IG5C22T9", description: "facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit", manufacturer: "Lacus Etiam Foundation"},
  	{ price: 454.42, id: "66BH6S32R3", description: "feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc,", manufacturer: "Lorem Eu Metus Associates"},
  	{ price: 506.55, id: "42FE1K33O2", description: "Fusce mollis. Duis sit amet diam eu dolor egestas", manufacturer: "Tempus Foundation"},
  	{ price: 710.67, id: "41VX3E37E1", description: "sollicitudin orci sem eget massa. Suspendisse", manufacturer: "Amet Company"},
  	{ price: 910.74, id: "72WA2J73C3", description: "sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec", manufacturer: "Augue Foundation"},
  	{ price: 552.73, id: "82OS6F97P2", description: "egestas blandit. Nam nulla magna, malesuada", manufacturer: "Sodales At Ltd"},
  	{ price: 993.02, id: "57TV8P64D1", description: "eu augue porttitor interdum. Sed", manufacturer: "Enim Curabitur Massa LLC"},
  	{ price: 799.88, id: "92FJ4W99H9", description: "nunc. Quisque ornare tortor at risus. Nunc ac sem", manufacturer: "Curabitur Sed Tortor Incorporated"},
  	{ price: 578.80, id: "35KZ2G45P2", description: "nunc interdum feugiat. Sed nec metus facilisis lorem", manufacturer: "Vulputate Mauris Industries"},
  	{ price: 317.16, id: "11UM9K88K6", description: "lorem, eget mollis lectus pede et risus.", manufacturer: "Tellus Inc."},
  	{ price: 459.21, id: "76YU8H08W1", description: "et netus et malesuada fames ac turpis egestas. Aliquam", manufacturer: "Sed Libero Institute"},
  	{ price: 890.30, id: "23GO1L07M3", description: "est. Mauris eu turpis. Nulla aliquet.", manufacturer: "Sit Amet Risus Inc."},
  	{ price: 118.23, id: "90XU7A69Y6", description: "lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas", manufacturer: "Diam Institute"},
  	{ price: 679.47, id: "58VW9A86Q8", description: "ac mi eleifend egestas. Sed pharetra,", manufacturer: "Ornare Placerat Orci Inc."},
  	{ price: 259.81, id: "33UH1S45S8", description: "bibendum fermentum metus. Aenean sed pede nec", manufacturer: "Diam Company"},
  	{ price: 590.18, id: "13MN0U67F9", description: "massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc", manufacturer: "Phasellus Ornare Incorporated"},
  	{ price: 297.99, id: "81HI2A86A6", description: "suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis", manufacturer: "Tincidunt Nunc Ac LLC"},
  	{ price: 910.95, id: "58MC7M89Q1", description: "tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non", manufacturer: "Arcu Sed LLC"},
  	{ price: 686.38, id: "41XX4K38R8", description: "ipsum primis in faucibus orci luctus et ultrices posuere", manufacturer: "Dui Nec Urna LLC"},
  	{ price: 312.69, id: "75DU1B37B6", description: "Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus", manufacturer: "Est Consulting"},
  	{ price: 161.91, id: "91GH8F35S0", description: "risus. Donec nibh enim, gravida sit", manufacturer: "Mollis Incorporated"},
  	{ price: 712.23, id: "59KY8N10A5", description: "eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet,", manufacturer: "Nibh Vulputate Incorporated"},
  	{ price: 761.31, id: "14TC1O53A8", description: "iaculis odio. Nam interdum enim non nisi.", manufacturer: "Quam Vel Inc."},
  	{ price: 182.33, id: "18WT0N41V9", description: "quis, pede. Suspendisse dui. Fusce", manufacturer: "Mauris Integer Institute"},
  	{ price: 530.66, id: "85SX3E78E8", description: "egestas. Aliquam nec enim. Nunc ut erat.", manufacturer: "Vulputate LLP"},
  	{ price: 91.29, id: "57HZ5E19C6", description: "Integer id magna et ipsum cursus vestibulum. Mauris", manufacturer: "Etiam Inc."},
  	{ price: 930.20, id: "87NH4D26B2", description: "mauris, rhoncus id, mollis nec, cursus", manufacturer: "Nullam Scelerisque Neque Associates"},
  	{ price: 865.43, id: "88JY1Q09F0", description: "lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam,", manufacturer: "Elit Corp."},
  	{ price: 836.03, id: "77TI0R05B0", description: "arcu. Vestibulum ut eros non enim commodo hendrerit. Donec", manufacturer: "Urna Inc."},
  	{ price: 696.42, id: "76VI0E89U8", description: "tempor, est ac mattis semper,", manufacturer: "Ipsum Porta Elit Inc."},
  	{ price: 637.55, id: "67LU0K41S2", description: "pede. Suspendisse dui. Fusce diam nunc, ullamcorper", manufacturer: "Dui Nec Corporation"},
  	{ price: 960.78, id: "52HV3F43B1", description: "mauris id sapien. Cras dolor dolor, tempus", manufacturer: "Ante Ipsum Industries"},
  	{ price: 624.76, id: "17XT0X29J7", description: "sit amet massa. Quisque porttitor eros nec", manufacturer: "Nulla Cras Eu PC"},
  	{ price: 211.47, id: "22NH1A04E5", description: "Mauris magna. Duis dignissim tempor arcu. Vestibulum ut", manufacturer: "Vitae Orci Phasellus Inc."},
  	{ price: 100.64, id: "33HP7J71U4", description: "massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc", manufacturer: "Quis Ltd"},
  	{ price: 579.11, id: "58PF9R36N0", description: "nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam.", manufacturer: "Interdum Company"},
  	{ price: 497.59, id: "49HU8R55I7", description: "metus. Aenean sed pede nec ante blandit viverra. Donec tempus,", manufacturer: "Nec LLP"},
  	{ price: 651.40, id: "22HR9T83Q2", description: "Quisque porttitor eros nec tellus. Nunc", manufacturer: "Non Ltd"},
  	{ price: 467.56, id: "60QI0E36Q3", description: "amet ornare lectus justo eu arcu. Morbi sit amet massa.", manufacturer: "Et Netus Consulting"},
  	{ price: 94.51, id: "15ET9U15P5", description: "Aliquam rutrum lorem ac risus. Morbi", manufacturer: "At Sem Limited"},
  	{ price: 407.27, id: "59TZ4A79K4", description: "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non,", manufacturer: "Mauris Magna Incorporated"},
  	{ price: 571.75, id: "50NX8M86C6", description: "per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet", manufacturer: "Duis Ac Arcu Corporation"},
  	{ price: 111.25, id: "23PW7C09D8", description: "pede. Praesent eu dui. Cum sociis natoque penatibus et", manufacturer: "Lacus Nulla Consulting"},
  	{ price: 144.48, id: "71ZY8D13Y6", description: "ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque", manufacturer: "Tempor Corp."},
  	{ price: 295.92, id: "72AS1T40X5", description: "lacus. Cras interdum. Nunc sollicitudin", manufacturer: "Nam LLC"},
  	{ price: 987.42, id: "48OR6R26U2", description: "lobortis risus. In mi pede, nonummy ut, molestie in, tempus", manufacturer: "Ac Mattis Velit Incorporated"},
  	{ price: 664.41, id: "74ZT0S75E3", description: "libero et tristique pellentesque, tellus sem mollis dui, in sodales elit", manufacturer: "Non Quam LLP"},
  	{ price: 708.35, id: "48BC6P11E2", description: "Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,", manufacturer: "A Associates"},
  	{ price: 886.19, id: "82RS3W51D3", description: "mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris", manufacturer: "Odio A Purus Incorporated"},
  	{ price: 8.20, id: "92UP1T27T9", description: "pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec", manufacturer: "Malesuada Id Erat Company"},
  	{ price: 204.01, id: "91HG3W22P3", description: "mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis", manufacturer: "Ipsum Dolor Consulting"},
  	{ price: 129.78, id: "15MA2C15I2", description: "mi enim, condimentum eget, volutpat ornare, facilisis", manufacturer: "Sem Elit Limited"},
  	{ price: 956.38, id: "65NI8D42Q6", description: "eget, venenatis a, magna. Lorem ipsum", manufacturer: "Rutrum Incorporated"},
  	{ price: 481.05, id: "76AA8P57H6", description: "sodales. Mauris blandit enim consequat purus.", manufacturer: "Sit PC"},
  	{ price: 351.11, id: "75TE5F14P7", description: "egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper", manufacturer: "Aliquet Magna PC"},
  	{ price: 979.42, id: "24NR1B94I3", description: "ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis", manufacturer: "Lectus Convallis Est PC"},
  	{ price: 511.22, id: "15XI4A56B4", description: "et magnis dis parturient montes, nascetur", manufacturer: "Quis Diam Foundation"},
  	{ price: 203.87, id: "22SC3K48C7", description: "Quisque varius. Nam porttitor scelerisque", manufacturer: "Pede Malesuada Industries"},
  	{ price: 104.14, id: "95YB2K08C2", description: "vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc", manufacturer: "Velit Eget Laoreet Industries"},
  	{ price: 210.33, id: "47IT6A20E2", description: "et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam", manufacturer: "Lorem Auctor Quis Company"},
  	{ price: 636.41, id: "16PD9J84E7", description: "molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse", manufacturer: "Vitae Company"},
  	{ price: 262.71, id: "41MU8R40F4", description: "dolor. Quisque tincidunt pede ac urna.", manufacturer: "Ac Orci Ut Inc."},
  	{ price: 267.67, id: "13GH7S67X5", description: "ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor", manufacturer: "Tortor Consulting"},
  	{ price: 677.99, id: "61AC8W13W8", description: "eros non enim commodo hendrerit. Donec porttitor tellus non", manufacturer: "Nec Enim Nunc Corporation"},
  	{ price: 234.27, id: "97SV3D31Q1", description: "vitae sodales nisi magna sed dui. Fusce aliquam, enim nec", manufacturer: "Consectetuer Cursus Limited"},
  	{ price: 412.31, id: "46JF0T82S8", description: "justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus.", manufacturer: "Nullam LLC"},
  	{ price: 806.83, id: "23YI8M59V7", description: "mauris. Suspendisse aliquet molestie tellus.", manufacturer: "Leo PC"},
  	{ price: 402.02, id: "97UG0J72Q2", description: "aliquet magna a neque. Nullam ut nisi a", manufacturer: "Non Hendrerit Id Institute"},
  	{ price: 392.37, id: "16JQ3U26P9", description: "orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula", manufacturer: "Justo Eu Arcu Corporation"},
  	{ price: 977.70, id: "94BM7E76I5", description: "amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices", manufacturer: "Dapibus Ligula Aliquam Limited"},
  	{ price: 168.33, id: "90DD6R00O0", description: "Cum sociis natoque penatibus et magnis dis", manufacturer: "Aliquam Nec Ltd"},
  	{ price: 210.85, id: "82LU1O26W4", description: "pretium neque. Morbi quis urna. Nunc quis arcu", manufacturer: "Penatibus Corporation"},
  	{ price: 954.16, id: "21LC7J53G8", description: "Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat", manufacturer: "Fusce Foundation"},
  	{ price: 11.42, id: "16NR3K18H8", description: "justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec", manufacturer: "Iaculis Lacus Pede Corp."},
  	{ price: 328.39, id: "32ZK2S54I4", description: "tincidunt vehicula risus. Nulla eget metus eu erat semper", manufacturer: "Ipsum Ltd"},
  	{ price: 541.45, id: "54LZ5L36U2", description: "Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada", manufacturer: "Aliquet Proin Inc."},
  	{ price: 346.25, id: "47OW8P63Z5", description: "Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis", manufacturer: "Sit Amet Corp."},
  	{ price: 512.28, id: "50DH6B94Y4", description: "congue a, aliquet vel, vulputate eu,", manufacturer: "Semper Auctor Mauris Incorporated"},
  	{ price: 577.98, id: "32DW5A64Z5", description: "congue turpis. In condimentum. Donec at arcu. Vestibulum", manufacturer: "Fermentum Consulting"},
  	{ price: 217.08, id: "80TS8I02J1", description: "eu turpis. Nulla aliquet. Proin velit. Sed", manufacturer: "Augue Porttitor Interdum PC"},
  	{ price: 798.98, id: "72AJ8Z92T1", description: "tellus. Nunc lectus pede, ultrices", manufacturer: "Faucibus Incorporated"},
  	{ price: 238.26, id: "30UK5W39B9", description: "facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean", manufacturer: "Rhoncus Industries"},
  	{ price: 293.08, id: "94WB9L94A1", description: "urna convallis erat, eget tincidunt dui augue eu", manufacturer: "Ante Ipsum Corporation"},
    //Just commeting  some out so the numbers on the homepage look more organic
    // { price: 193.62, id: "43DM5E70B9", description: "facilisi. Sed neque. Sed eget lacus.", manufacturer: "Eu Arcu Morbi Foundation"},
  	// { price: 536.41, id: "33IH6M92S2", description: "mi enim, condimentum eget, volutpat ornare,", manufacturer: "Phasellus Dolor Elit Ltd"},
  	// { price: 33.12, id: "98OO2X75I7", description: "condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula.", manufacturer: "Nulla Aliquet Proin Associates"},
  	// { price: 128.81, id: "71TS6V49K2", description: "a odio semper cursus. Integer", manufacturer: "Molestie Arcu Foundation"},
  	// { price: 74.89, id: "91LA0O95W2", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam", manufacturer: "Non Company"},
  	// { price: 806.49, id: "25AT5V48X8", description: "porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non,", manufacturer: "Nec Foundation"},
  	// { price: 31.96, id: "71DU4Q27X5", description: "sapien. Cras dolor dolor, tempus non, lacinia", manufacturer: "Etiam Bibendum LLP"},
  	// { price: 410.27, id: "35HC5Q85Q7", description: "odio vel est tempor bibendum. Donec felis orci, adipiscing", manufacturer: "Non Magna Company"},
  	// { price: 66.04, id: "90RS7E25F6", description: "pede ac urna. Ut tincidunt vehicula", manufacturer: "Posuere Cubilia Foundation"},
  	// { price: 697.74, id: "54ZG3T04F4", description: "gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet", manufacturer: "Gravida Mauris Ltd"},
  	// { price: 821.01, id: "64WX9A18Y8", description: "a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et", manufacturer: "Dui Corporation"},
  	// { price: 91.71, id: "19TY2G90B8", description: "consequat enim diam vel arcu. Curabitur", manufacturer: "Turpis Non Enim LLC"},
  	// { price: 394.16, id: "53WJ6U29P9", description: "id ante dictum cursus. Nunc", manufacturer: "Egestas LLP"},
  	{ price: 447.13, id: "99GP8U24Q3", description: "pellentesque, tellus sem mollis dui, in", manufacturer: "Faucibus Industries"},
  	{ price: 367.76, id: "67ZS9T38L2", description: "volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida", manufacturer: "Neque Tellus Imperdiet LLC"},
  	{ price: 667.08, id: "84FW2Z01Y5", description: "sociosqu ad litora torquent per conubia nostra, per", manufacturer: "Vitae Nibh Foundation"},
  	{ price: 117.28, id: "72OU1B34W1", description: "malesuada. Integer id magna et ipsum cursus", manufacturer: "Gravida Sit Ltd"}
  ];

  icons: string[] = ['box', 'cog', 'cube', 'gem', 'globe', 'sun', 'tag', 'tablet', 'leaf', 'industry', 'dribble-square', 'dot-circle', 'certificate'];

  orders: Order[] = [];
  filteredCustomers: Customer[] = [];
  filteredOrders: Order[] = [];
  filteredProducts: Product[] = [];

  constructor() {
    this.generateOrders();
    this.fillCustomerOrders();
    this.fillProductHistory();
    this.filteredCustomers = this.customers;
    this.filteredOrders = this.orders;
    this.filteredProducts = this.products;

    console.log(this.products)
  }

  ngOnInit() {}

  filter(arr: any[], fvar: string, key: string, value: any, property?: any) {
    switch(this.getKeyType(key)) {
      case 'string' || 'number': this[fvar] = this.filterByString(arr, key, value);
        break;
      case 'object': this[fvar] = this.filterByObject(arr, key, value, property); break; //will do an object filter in future
      default: this[fvar] = arr.filter(d=> d[key].toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1);
    }
  }

  filterByString(arr: any[], key: string, value: any): Customer[] | Order[] | Product[] {
    arr = arr.filter(d=> d[key].toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1 || d[key] === value);
    return arr;
  }

  filterByObject(arr: any[], key: string, value: any, property: string): Customer[] | Order[] | Product[] {
    let propArr: any[] = [];
    arr[property].forEach(a=> {
      let type = this.getKeyType(a[key]);
      if(type === 'string') {
        if(a[key].toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1 || a[key] === value) propArr.push(a);
      } else if(type === 'date') {
        // too much work for this simple app maybe later
        if(a[key].toLocalString().indexOf(value.toString().toLowerCase()) > -1) propArr.push(a);
      }
    });
    return propArr;
  }

  filterCustomers(key: string, value: any) {
    this.filter(this.customers, 'filteredCustomers', key, value);
  }

  filterOrders(key: string, value: any) {
    this.filter(this.orders, 'filteredOrders', key, value);
  }

  filterProducts(key: string, value: any) {
    this.filter(this.products, 'filteredProducts', key, value);
  }

  fillCustomerOrders() {
    this.orders.forEach(order=> {
      order.products.forEach(p=> {
        const product = this.products.find(product=> product.id === p.id);
        if(product.orderHistory) {
          product.orderHistory.push({ date: order.date, orderId: order.id, customerId: order.customer.id});
        } else {
          product['orderHistory'] = [{ date: order.date, orderId: order.id, customerId: order.customer.id}];
        }
      });
    });
  }

  fillProductHistory() {
    this.orders.forEach(order=> {
      const customer = this.customers.find(customer=> customer.id === order.customer.id);
      if(customer.orders) {
        customer.orders.push(order);
      } else {
        customer['orders'] = [order];
      }
    });
  }

  getKeyType(key: string): string {
    let type: string;
    switch (key) {
      case 'id' || 'customerId' || 'orderId': type = 'string'; break;
      case 'date': type = 'date'; break
      case 'price' || 'total': type = 'number'; break;
      case 'order' || 'customer' || 'product': type = 'object'; break;
      default: type = 'string';
    }
    return type;
  }

  generateOrderId(customerId: string): string {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let id: string[] = [];
    for(let i = 0; i < 12; i++) {
      id.push(chars[this.generateRandom(0, chars.length - 1)]);
    }
    return id.join('');
  }

  generateRandom(min: number, max: number): number {
    return Math.floor(min + Math.random()*(max+1 - min));
  }

  getCustomerProductHistoryOrders(orders: Order[]): ProductHistory[] {
    let productHistory: ProductHistory[] = [];
    orders.forEach(o=> {
      o.products.forEach(p=> {
        let idx = productHistory.findIndex(prod=> prod.id === p.id);
        if(idx > -1) {
          productHistory[idx].count++;
        } else {
          let hist = Object.assign({}, p, { count: 1 });
          productHistory.push(hist);
        }
      });
    });
    return productHistory;
  }

  getRandomProducts(numberOfProducts: number): any {
    let products: Product[] =[];
    let productIndex: number;
    let price: number = 0;
    for(let i = 0; i < numberOfProducts; i++) {
      productIndex = this.generateRandom(0, this.products.length - 1);
      this.products[productIndex]['icon'] = this.icons[this.generateRandom(0,12)];
      products.push(this.products[productIndex]);
      price += this.products[productIndex].price;
    }
    return { products: products, price: price };
  }

  generateOrders() {
    for(let i = 0; i < this.generateRandom(400, 600); i++) {
      let customer: Customer, products: Product[], price: number, date: Date,id: string;

      if(i < this.customers.length) {
        customer = this.customers[i]
      } else {
        customer = this.customers[this.generateRandom(0, this.customers.length - 1)];
      }

      date = new Date(this.generateRandom(2015, 2018), this.generateRandom(1, 12), this.generateRandom(1, 28), this.generateRandom(0, 23), this.generateRandom(0, 59), this.generateRandom(0, 59));
      id = this.generateOrderId(customer.id);

      let productData = this.getRandomProducts(this.generateRandom(1, 8));
      products = productData.products;
      price = productData.price;

      let order: Order = {
        date: date,
        id: id,
        customer: customer,
        products: products,
        price: Math.round(price* 100)/100
      };
      this.orders.push(order);
    }
    this.orders = this.sort(this.orders, 'date', 'desc');
  }

  sort(array: any[], key: string, dir: string): any[] {
    array.sort(function(a, b) {
      let x: any;
      let y: any;
      if (key === "date")
      {
        x = a[key].getTime();
        y = b[key].getTime();
      } else if(!array[0][key]) {
        if(key === 'customerId') {
          x = a['customer']['lastName'];
          y = b['customer']['lastName'];
        }
      } else {
        x = a[key];
        y = b[key];
      }
      // console.log(a[key])
      // console.log(b[key])
      if (typeof x == "string") x = x.toLowerCase();
      if (typeof y == "string") y = y.toLowerCase();
      if(dir === 'desc') {
        return x > y ? -1 : 1;
      } else {
        return x < y ? -1 : 1;
      }
    });
    return array;
  }

  sortCustomers(sort: SortOptions) {
    this.sort(this.filteredCustomers, sort.key, sort.dir);
  }

  sortOrders(sort: SortOptions) {
    this.sort(this.filteredOrders, sort.key, sort.dir);
  }

  sortProducts(sort: SortOptions) {
    this.sort(this.filteredProducts, sort.key, sort.dir);
  }

}
