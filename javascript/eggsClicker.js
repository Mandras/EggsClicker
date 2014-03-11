/*
**    This program is free software: you can redistribute it and/or modify
**    it under the terms of the GNU General Public License as published by
**    the Free Software Foundation, either version 3 of the License, or
**    (at your option) any later version.
**
**    This program is distributed in the hope that it will be useful,
**    but WITHOUT ANY WARRANTY; without even the implied warranty of
**    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
**    GNU General Public License for more details.
**
**    You should have received a copy of the GNU General Public License
**    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
** VARIABLES GLOBALES MODIFIABLES
*/

var MONEY			=	99999999;						// L'argent
var EGGS			=	99999999;						// Le nombre d'oeufs
var MAGIC_EGGS		=	10;								// Le nombre d'oeufs magic
var GOLD_EGGS		=	10000;						  	// Le nombre d'oeufs en or
var QUOTIENT_AUTO	=	0;								// L'apport en oeufs / secondes
var QUOTIENT_CLICK	=	1;								// L'apport en oeufs d'un clic
var QUOTIENT_GOLD	=	0;								// Frequence d'apport d'un oeuf d'or
var AUTO_CLICK		=	0;								// Nombre d'auto clic (par 1/10 sec)
var SELL_LOADING	=	30;								// Combien de sec entre 2 ventes
var BOOST_DURATION	=	5;								// Duree du boost
var BOOST_QUOTIENT	=	2;								// Quotient du boost
var EGG_COST		=	0.10;							// Prix de l'oeuf
var ACTUAL_X 		=	1;								// Nombre de colonne de la map
var HERO_NAME		=	"";								// Le nom du hero
var HERO_CLASS		=	"Paladin";						// La classe du hero
var HERO_CLICK_QUOT	=	1;								// Quotient du clic hero
var HERO_LEVEL		=	1;								// Niveau du hero
var HERO_HP			=	50;								// Les HP du hero
var HERO_HP_MAX		=	100;							// Les HP max du hero
var HERO_DAMAGE		=	7;								// Les degats du hero (de depart)
var ENNEMY_WAVE		=	0;								// Vague actuel d'ennemies
var NEXT_ENNEMY		=	"Aucun";						// Description de la prochaine vague
var STOCK_MAXI		=	999999999;						// Stock maximum d'oeufs
var SELL_MAXI		=	50000000;						// Vente maximum d'oeufs simultannement
var PLAY_TIME		=	0;								// Temps de jeu (en minute)
var BOOST_LUCK		=	1;								// Definis une chance de x % de popper un oeuf magic / sec
var COMBAT_DELAY	=	10000;								// Definis en secondes, l'interval entre 2 combats
var REGEN_HP		=	0;								// La regen / sec des HP du hero (en dehors des combats)
var PRICE_AREA		=	2;								// Prix d'une colonne de terrain
var PRICE_POTION	=	2;								// Prix d'une red potion
var QUOT_AREA		=	1.3;							// Quotient multiplicateur de l'achat d'un terrain
var QUOT_POTION		=	1.5;							// Quotient multiplicateur de l'achat d'une potion de soin
var MAGIC_TIMEOUT	=	5;								// Duree en seconde d'affichage de l'oeuf magique
var AFTER_DEATH		=	20;								// % de HP recuperer apres une mort
var LEAKAGE_ROUND	=	3;								// Nombre de tour avant fuite

/*
** VARIABLES GLOBALES A NE PAS MODIFIER
*/

var SHOP 			=	new Array();					// Liste contenant toute la boutique
var MAP 			=	new Array();					// Liste contenant toute la carte (Droppable ou non)
var PETS 			=	new Array();					// Liste contenant tout les animaux achetes
var ENNEMY 			=	new Array();					// Liste contenant tout les ennemis
var IMAGES_TO_LOAD	=	new Array();					// Liste contenant toutes les images non HTML
var SHOPPOINTER 	=	0;								// Pointeur (++) du tableau des elements de la boutique
var IMAGES_ARRAY_P	=	0;								// Pointeur (++) du tableau des images (pour le loader final)
var ENNEMYPOINTER	=	0;								// Pointeur (++) du tableau des ennemis
var ANCIENT_MOVE 	=	"X";							// ID de l'ancien bloc pointe (en cas de deplacement, sinon == 'X')
var LAST_SHOP_ID 	=	"pets";							// La shop a montrer en premier
var DRAGGABLE_ITEM	=	0;								// ID de l'element de la boutique en deplacement
var PAYER1			=	0;								// Recupere oeufs ou dollars 			(-- pour verification rapide lors du drag --)
var PRICE1			=	0;								// Recupere le prix en oeufs ou dollars	(-- pour verification rapide lors du drag --)
var PAYER2			=	0;								// Recupere le nombre d'oeuf en or 		(-- pour verification rapide lors du drag --)
var PRICE2			=	0;								// Recupere le prix en oeuf d'or 		(-- pour verification rapide lors du drag --)
var PAYER3			=	0;								// Recupere le nombre d'oeufs magiques 	(-- pour verification rapide lors du drag --)
var PRICE3			=	0;								// Recupere le prix en oeuf magique 	(-- pour verification rapide lors du drag --)
var MAXI_Y			=	10;								// Nombre de ligne du jeu
var ACTUAL_BOOST	=	0;								// Flag pour dire si nous sommes en boost ou non (pour calcul oeuf)
var LOCK_MAGIC		=	0;								// Flag pour dire si nous affichons un oeuf magique ou non
var LOCK_COMBAT		=	0;								// Si 1, un combat est en court (rien ne bouge en arriere plan)
var COMBAT_INCOME	=	0;								// Un combat est en attente (COMBAT_DELAY secondes)
var HERO_ID			=	0;
var HERO_BONUS		=	'';
var HP_ENNEMY		=	0;								// HP de l'ennemis
var HP_MAX_ENNEMY	=	0;								// HP Max de l'ennemis
var DMG_ENNEMY		=	0;								// Degat de l'ennemis
var NAME_ENNEMY		=	'';								// Nom de l'ennemis
var ENEMY_NB_MAX	=	0;								// S'incremente a chaque ajout d'un ennemis a la liste ENNEMY
var ACTUAL_LAND		=	1;								// Nom de l'environnement actuel
var STARTING_BLOCK	=	10;								// Nombre de colonne de terrain au demarrage
var SPRITE_DELAY	=	0;								// Delais entre 2 animations (le monter au fur et a mesure qu'il y a d'objets)
var LEAKAGE			=	-1;								// Tour restant avant fuite (-1 = pas de fuite)
var ICED			=	0;								// Si l'ennemi est gele
var PAUSE 			=	0;								// Le jeu est-il en pause ?
var DURATION_ATT	=	100;
var LAST_HERO		=	0;

// INITIALISATION DE LA BOUTIQUE
function initShop() {
	/*
	** ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	**            ID             ID                   Nom                        Prix         Prix        Prix                                                                              Bonus                     Taille        Description                                                  Description
	**          animal        boutique               Animal                   Money / Oeuf   Oeuf or   Oeuf Magie     Verouille    Deverouille quoi ?  Multiplicateur         Unique    (oeufs / sec)   Animation     x / y          Bonus                                                       Boutique
	** ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	*/
	addShopItem("Chick",       "pets",    "Poussin",                       	       20,          0,          0,            0,        "Cat",                  1.3,                false,           1,	         1,        "1x1",   "+ 1 &oelig;uf / sec",                      "Qui est apparu le premier entre l'&oelig;uf et la poule ? Le poussin !");
	addShopItem("Frog",        "pets",    "Grenouille",                    	      250,          0,          0,            0, "LittleGirl",                  1.3,                false,           5,	         1,        "1x1",   "+ 5 &oelig;ufs / sec",                     "La grenouille pond beaucoup mais de tout petits &oelig;ufs.");
	addShopItem("Bird1",       "pets",    "Mouette",                       	     1250,          0,          0,            0,   "Chicken1",                  1.3,                false,          25,	         1,        "1x1",   "+ 25 &oelig;ufs / sec",                    "Cet oiseau est tr&egrave;s r&eacute;pendu sur l'&icirc;le.<br />Mais La mouette pond de petits &oelig;ufs");
	addShopItem("Chicken1",    "pets",    "Jeune poule",                  	     5000,          0,          0,            0,          "0",                  1.3,                false,         100,	         1,        "1x1",   "+ 100 &oelig;ufs / sec",                   "Un investissement de qualit&eacute; pour l'avenir.");
	addShopItem("Bird2",       "pets",    "Colombe",                      	    12500,          0,          0,            0,     "Plant2",                  1.3,                false,         250,	         1,        "1x1",   "+ 250 &oelig;ufs / sec",                   "Signe de prosp&eacute;rit&eacute;, ses &oelig;ufs en sont pas moins de bonne qualit&eacute;.");
	addShopItem("Chicken2",    "pets",    "Poule adulte",                 	    25000,          0,          0,            0,          "0",                  1.4,                false,         500,	         1,        "1x1",   "+ 500 &oelig;ufs / sec",                   "Vous donne des &oelig;ufs en abondance.<br />La poule est l'embl&egrave;me de votre &icirc;le.");
	addShopItem("Bird3",       "pets",    "Corbeau",                      	    50000,          0,          0,            0,     "Plant3",                  1.4,                false,        1000,	         1,        "1x1",   "+ 1 000 &oelig;ufs / sec",                 "Au diable les mauvais pr&eacute;sages ! Il faut tirer profit de toutes les situations.");
	addShopItem("Chicken4",    "pets",    "Poulet",                      	   250000,          0,          0,            0,          "0",                  1.4,                false,        5000,	         1,        "1x1",   "+ 5 000 &oelig;ufs / sec",                 "Un m&acirc;le de qualit&eacute;. Augmente la f&eacute;condit&eacute; des poules.");
	addShopItem("Bird4",       "pets",    "Aigle",                       	   500000,          0,          0,            0,    "Voyante",                  1.4,                false,       10000,	         1,        "1x1",   "+ 10 000 &oelig;ufs / sec",                "Des &oelig;ufs haut perch&eacute;s mais d'une tr&egrave;s grande valeur.");
	addShopItem("Chicken5",    "pets",    "Poulet royal",               	  2500000,          0,          0,            0,          "0",                  1.4,                false,       50000,	         1,        "1x1",   "+ 50 000 &oelig;ufs / sec",                "Personne ne r&eacute;siste &agrave; sa grande cr&ecirc;te et son regard de braise.");
	addShopItem("Bird5",       "pets",    "Aigle royal",                	  5000000,          0,          0,            0,   "Chicken6",                  1.5,                false,      100000,	         1,        "1x1",   "+ 100 000 &oelig;ufs / sec",               "Plus de 2m d'envergure, c'est la cr&egrave;me de la cr&egrave;me des aigles !");
	addShopItem("Ptero",       "pets",    "Pterodactyl",               		 25000000,          0,          0,            0,          "0",                  1.5,                false,      500000,	         1,        "3x2",   "+ 500 000 &oelig;ufs / sec",               "Tout droit sorti de la pr&eacute;histoire, ce monstre pond des &oelig;ufs &eacute;normes !");
	addShopItem("Dragon",      "pets",    "Dragon",                    		 50000000,          0,          0,            0,      "Bird6",                  1.5,                false,     1000000,	         1,        "2x2",   "+ 1 000 000 &oelig;ufs / sec",             "Maintenant vous le savez, les dragons existent bel et bien !");
	addShopItem("Bird6",       "pets",    "Phoenix",                  		250000000,          0,          0,            0,          "0",                  1.6,                false,     5000000,	         1,        "3x2",   "+ 5 000 000 &oelig;ufs / sec",             "Un oiseau de l&eacute;gende ! Ses &oelig;ufs sont ramass&eacute;s pr&eacute;-cuit.");
	addShopItem("Chicken7",    "pets",    "D&eacute;esse des poules",	   2500000000,          0,         20,            0,          "0",                  1.6,                true,     50000000,	         1,        "3x2",   "+ 50 000 000 &oelig;ufs / sec",            "L'invocation d'une divinit&eacute;. Ses &oelig;ufs sont des reliques ancestrales.");

	addShopItem("Cat",         "build",   "Chat",                             		5,          0,          0,            0,        "Dog",                    2,                false,           0,          1,        "1x1",   "+1 &OElig;uf / clic",                      "Il court apr&egrave;s les oiseaux, sous le stresse, elles pondent plus vite !");
	addShopItem("Dog",         "build",   "Chien",                           		10,         0,          0,            0,     "Plant0",                    2,                false,           0,          1,        "1x1",   "+1 Auto clic / 2 sec",                    "Un chien fid&egrave;le. Bien dr&eacute;ss&eacute;, il vous aidera dans votre t&acirc;che.");
	addShopItem("LittleGirl",  "build",   "Petite fille",                     		1,          0,          0,            0,  "LittleBoy",                    2,                false,           0,          1,        "1x1",   "+100 Stock maximum",                       "Une petite fille du voisinage. Elle vous aide &agrave; ramasser les &oelig;ufs.");
	addShopItem("LittleBoy",   "build",   "Petit gar&ccedil;on",              		1,          0,          0,            0,      "Tonn1",                    2,                false,           0,          1,        "1x1",   "+50 Vente maximum",                        "Pour son argent de poche, il vous aide volontier &agrave; vendre vos &oelig;ufs.");
	addShopItem("Farmer1",     "build",   "Fermi&egrave;re &eacute;tudiante", 		1,          0,          0,            0,    "Farmer2",                    2,                false,           0,          1,        "1x1",   "+2 &oelig;ufs / clic",                     "Une fermi&egrave;re d&eacute;butante mais avec de bonnes motivations.");
	addShopItem("Farmer2",     "build",   "Fermier &eacute;tudiant",          		1,          0,          0,            0,     "Plant1",                    2,                false,           0,          1,        "1x1",   "+1 Auto clic / sec",                     "Un homme en pleine forme et plein d'energie. Sa pr&eacute;sence vous rassure.");
	addShopItem("Chicken3",    "build",   "Poule dor&eacute;e",               		1,          0,          0,            0,      "Bird2",                    2,                 true,           0,          1,        "1x1",   "+1 &oelig;uf d'or / min",                  "D&eacute;verouille les &oelig;ufs d'or. Cette poule est une vraie petite l&eacute;gende.");
	addShopItem("Magician1",   "build",   "Magicienne",                       		1,          2,          0,            0,      "Bird3",                    2,                 true,           0,          1,        "1x1",   "+1 Magie",   							    "D&eacute;verouille les &oelig;ufs magiques.");
	addShopItem("Angel1",      "build",   "Ange",                             		1,          3,          0,            0,     "Guard1",                    2,                 true,           0,          1,        "1x1",   "+1 R&eacute;generation HP / sec", 		    "Probablement votre ange gardient.");
	addShopItem("Guard1",      "build",   "Garde",                            		1,          0,          0,            0,      "Tonn2",                    2,                 true,           0,          1,        "1x1",   "+30 HP / + 3 D&eacute;gats",    		    "Un garde pr&ecirc;t &agrave; se sacrifier pour vous.");
	addShopItem("Bunny",       "build",   "Servante &eacute;l&eacute;gante",  		1,          5,          0,            0,   "Chicken4",                    2,                 true,           0,          1,        "1x1",   "R&eacute;duit le d&eacute;lais des ventes","Elle sert vos clients avec autant de rapidit&eacute; qu'elle est s&eacute;duisante.");
	addShopItem("Voyante",     "build",   "Voyante",                          		1,          5,          0,            0,     "Plant4",                    2,                 true,           0,          1,        "1x1",   "Permet de pr&eacute;dire les attaques",    "Elle annonce les mauvais pr&eacute;sages. Vous la croyez sur parole.");
	addShopItem("Farmer3",     "build",   "Fermi&egrave;re",                  		1,          0,          0,            0,    "Farmer4",                    2,                false,           0,          1,        "1x1",   "+200 &OElig;ufs / clic",   				"Une fermi&egrave;re qualifi&eacute; (quoi qu'un peu ch&egrave;re).");
	addShopItem("Farmer4",     "build",   "Fermier",                 		  		1,          0,          0,            0,     "Plant5",                    2,                false,           0,          1,        "1x1",   "+10 Auto clic / sec",   				    "Un fermier talentueux, il sait parler aux animaux.");
	addShopItem("Magician2",   "build",   "Magicienne",                       		1,         10,          0,            0,     "Bikini",                    2,                 true,           0,          1,        "1x1",   "+3 Magie",   							    "Tomb&eacute; du ciel dans un tas de paille, elle peux vous enseigner la magie de glace.");
	addShopItem("Bikini",      "build",   "Fille en bikini",                  		1,          0,          0,            0,       "Bite",                    2,                 true,           0,          1,        "1x1",   "Double le prix de l'&oelig;uf",   		    "Sa beaut&eacute; est sans pareil ... Elle attirera les clients du monde entier.");
	addShopItem("Chicken6",    "build",   "Poulet royal dor&eacute;",         		1,          0,          0,            0,          "0",                    2,                 true,           0,          1,        "1x1",   "+5 &oelig;ufs d'or / min",                 "Le v&eacute;ritable prince charmant de la poule aux &oelig;ufs d'or.");
	addShopItem("Guard2",      "build",   "Garde d'&eacute;lite",             		1,          0,          0,            0,          "0",                    2,                false,           0,          1,        "1x1",   "+200 HP / + 20 D&eacute;gats",    		    "Son courage et sa bravoure n'est plus &agrave; d&eacute;montr&eacute;.");
	addShopItem("Magician3",   "build",   "Mage gu&eacute;risseur",           		1,         50,          0,            0,          "0",                    2,                 true,           0,          1,        "1x1",   "+6 Magie",   							    "En combat, il permet de vous soigner. Indispensable pour rester en vie.");
	addShopItem("Queen",       "build",   "Reine",                            		1,        100,          0,            0,       "King",                    2,                 true,           0,          1,        "1x1",   "+5 000 000 000 Stockage max.",             "La Reine vous autorise &agrave; entreproser les &oelig;ufs dans son ch&acirc;teau.");
	addShopItem("King",        "build",   "Roi",                              		1,        100,          0,            0,          "0",                    2,                 true,           0,          1,        "1x1",   "+1 000 000 000 Vente max.",                "Le Roi vous aide dans votre commerce. Il a fais de votre entreprise sa priorit&eacute;.");
	addShopItem("Angel2",      "build",   "Ange divin",                       		1,        150,          0,            0,          "0",                    2,                 true,           0,          1,        "1x1",   "+10 R&eacute;generation HP / sec", 		"Venus des cieux pour vous aider dans votre combat contre le mal.");
	addShopItem("Guard3",      "build",   "Commandeur h&eacute;roique",       		1,        500,          0,            0,          "0",                    2,                 true,           0,          1,        "1x1",   "+1 500 HP / + 150 D&eacute;gats",    	    "Un commandeur et h&eacute;ro du royaume. Il aurait particip&eacute; &agrave; l'ancienne grande guerre.");
	addShopItem("Magician4",   "build",   "Mage l&eacute;gendaire",           		1,        500,          0,            0,          "0",                    2,                 true,           0,          1,        "1x1",   "+10 Magie",   							    "Maitre de la magie de la destruction, il est revenus d'entre les morts pour vous aider.");

	addShopItem("Plant0",      "upgrade", "Plante",                           		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 100 Vente max.",                         "Objet de d&eacute;coration, attire les clients.");
	addShopItem("Plant1",      "upgrade", "Plante",                           		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 1 000 Vente max.",                       "Objet de d&eacute;coration, attire les clients.");
	addShopItem("Plant2",      "upgrade", "Plante",                           		1,          0,          0,            0,   "Chicken2",                  1.4,                 false,           0,         0,        "1x1",   "+ 2 000 Vente max.",                       "Objet de d&eacute;coration, attire les clients.");
	addShopItem("Plant3",      "upgrade", "Plante",                           		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 5 000 Vente max.",                       "Objet de d&eacute;coration, attire les clients.");
	addShopItem("Plant4",      "upgrade", "Plante",                           		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 10 000 Vente max.",                      "Objet de d&eacute;coration, attire les clients.");
	addShopItem("Plant5",      "upgrade", "Plante",                           		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 50 000 Vente max.",                      "Objet de d&eacute;coration, attire les clients.");
	addShopItem("Tonn1",       "upgrade", "Tonneau",                          		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 1 000 Stockage max.",                    "Augmente la capacit&eacute; de stockage des &oelig;ufs.");
	addShopItem("Tonn2",       "upgrade", "Tonneau",                          		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 100 000 Stockage max.",                  "Augmente la capacit&eacute; de stockage des &oelig;ufs.");
	addShopItem("Bite",        "upgrade", "Bitte",                            		1,          0,          0,            0,          "0",                  1.4,                 false,           0,         0,        "1x1",   "+ 500 000 Vente et Stockage",              "Profitez de tout les atraits du commerce maritime.");
	addShopItem("StatutD",     "upgrade", "Statut dragon",                    		1,          0,          0,            0,     "Dragon",                  1.4,                 true,            0,         0,        "1x1",   "D&eacute;bloque le dragon",                "Une statut renfermant certains secrets. Son toucher est brulant &agrave; n'importe quel moment.");
	addShopItem("Relique",     "upgrade", "Relique enchant&eacute;e",         		1,        100,          0,            0,          "0",                  1.4,                 true,            0,         0,        "3x3",   "Double le bonus lors du boost",            "Une ancienne relique magique, elle brille lorsqu'on y approche un &oelig;uf magique.");
	addShopItem("MagicalC",    "upgrade", "G&eacute;n&eacute;rateur de magie",		1,        200,          0,            0,          "0",                  1.4,                 true,            0,         0,        "3x3",   "Double la dur&eacute;e du boost",          "Un &eacute;trange cocon canalyse toute l'energie qui l'y entoure. Qu'y a t-il &agrave; l'int&eacute;rieur ?");
	addShopItem("House1",      "upgrade", "Tente",				            	    0,          0,          0,            0,           "",                  1.4,                 true,            0,         0,        "4x4",   "+500 stockage max",                        "La tente offerte par votre oncle. Elle permet d'entreposer un certain nombre d'&oelig;ufs.");
	addShopItem("House2",      "upgrade", "Maison",				              		0,          0,          0,            0,          "0",                  1.4,                 true,            0,         0,        "6x6",   "Double la dur&eacute;e du boost",          "Un &eacute;trange cocon canalyse toute l'energie qui l'y entoure. Qu'y a t-il &agrave; l'int&eacute;rieur ?");
}
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

// INITILISATION DU TABLEAU DES ENNEMIS
function initEnnemies() {
	/*
	** ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	**            ID               Nom                                 Changement           HP               Degat                ID Shop           Bonus                 Son
	**          Ennemy           Ennemy                               Environnement       Ennemy             Ennemy             a debloquer         Dollar               Attaque
	** ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	*/
	addEnnemy("bee",			"Abeille",									0,			    1,					3,				 "Frog",			  	100,				"attack2");
	addEnnemy("bat",			"Chauve-souris",							1,				1,	    		    0,					"0",				11,				"attack1");
	addEnnemy("mushroom",		"Champignatox",								0,				1,					0,			  "Farmer1",				20,				"attack1");
	addEnnemy("scorpion",		"Scorpion",									0,			    1,					0,				"Bird1",				0,				"attack1");
	addEnnemy("devil1",			"Diablotin",								0,			    1,					0,			 "Chicken3",				0,				"attack1");
	addEnnemy("mutant_chicken",	"Poulet mutant",							0,			    1,					0,					"0",				0,				"attack1");
	addEnnemy("buffle",			"Buffle",									0,			    1,					0,			"Magician1",				0,				"attack1");
	addEnnemy("libellule",		"Libellule",							    1,			    1,					0,			   "Angel1",				0,				"attack1");
	addEnnemy("mutant_frog",	"Grenouille mutante",					    0,			    1,				    0,				    "0",		    	0,				"attack1");
	addEnnemy("octopus",		"Pieuvre mutante",						    0,				1,					0,				"Bunny",				0,				"attack1");
	addEnnemy("zombie",			"Zombie",								    0,				1,					0,				"Bird4",				0,				"attack1");
	addEnnemy("skeleton",		"Squelette pirate",						    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("ghost",			"Fant&ocirc;me",						    0,				1,					0,			  "Farmer3",				0,				"attack1");
	addEnnemy("assassin",		"Assassin",								    1,				1,					0,			 "Chicken5",				0,				"attack1");
	addEnnemy("snake1",			"Serpent mutant",						    0,				1,					0,			"Magician2",				0,				"attack1");
	addEnnemy("snake2",			"Serpent hydre",						    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("snake3",			"Serpent Naga",							    0,				1,					0,				"Bird5",				0,				"attack1");
	addEnnemy("snake4",			"Roi des serpents",						    0,				1,					0,			        "0",				0,				"attack1");
	addEnnemy("dinosaure",		"Reptilien",							    1,				1,					0,			   "House2",				0,				"attack1");
	addEnnemy("harpie",			"Harpie",								    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("griffon",		"Griffon",								    0,				1,					0,			   "Guard2",				0,				"attack1");
	addEnnemy("goblin1",		"Goblin garde",							    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("goblin2",		"Goblin assassin",						    0,				1,					0,			"Magician3",				0,				"attack1");
	addEnnemy("goblin3",		"Goblin tyranique",						    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("goblin4",		"Roi des goblins",						    0,				1,					0,				"Queen",				0,				"attack1");
	addEnnemy("wolf1",			"Loup mal&eacute;lifque",				    1,			    1,					0,					"0",				0,				"attack1");
	addEnnemy("wolf2",			"Cerb&egrave;",							    0,				1,					0,			   "Angel2",				0,				"attack1");
	addEnnemy("Vampire",		"Vampire",								    0,				1,					0,			        "0",				0,				"attack1");
	addEnnemy("devil2",			"Ghoul",								    0,				1,					0,			   "Guard3",				0,				"attack1");
	addEnnemy("mage_skeleton",	"Sorcier des t&eacute;n&egrave;bres",	    0,				1,					0,			        "0",				0,				"attack1");
	addEnnemy("ptero",			"Pt&eacute;rodactyl",					    1,				1,					0,				"Ptero",				0,				"attack1");
	addEnnemy("tree",			"Arbre sylvain poss&eacute;d&eacute;",	    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("gardien",		"Gardien du temple",					    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("leviathan",		"Leviathan",							    0,				1,					0,			"Magician4",				0,				"attack1");
	addEnnemy("dragon",			"Dragon",								    0,				1,					0,			  "StatutD",				0,				"attack1");
	addEnnemy("bigchicken",		"Dieu des poules",						    0,				1,					0,			 "Chicken7",				0,				"attack1");
	addEnnemy("lucifer1",		"Lucifer",								    1,				1,					0,					"0",				0,				"attack1");
	addEnnemy("lucifer2",		"Lucifer forme humaine",				    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("lucifer3",		"Lucifer r&eacute;incarn&eacute;",		    0,				1,					0,					"0",				0,				"attack1");
	addEnnemy("lucifer4",		"Lucifer forme finale",					    0,				1,					0,					"0",				0,				"attack1");
}
/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */

// FONCTION QUI AJOUTE UN ENNEMI DANS LA LISTE DES ENNEMIS
function addEnnemy(id, nom, environment, hp, dmg, unlock, dollar, sound) {
	var tab = new Array();

	tab["id"] = id;
	tab["name"] = nom;
	tab["environment"] = environment;
	tab["hp"] = hp;
	tab["dmg"] = dmg;
	tab["unlock"] = unlock;
	tab["dollar"] = dollar;
	tab["wave"] = ENNEMYPOINTER + 1;
	tab["sound"] = sound;

	ENNEMY[ENNEMYPOINTER] = tab;

	ENNEMYPOINTER++;

	ENEMY_NB_MAX++;
}

// FONCTION QUI DEFINI UNE ACTION PAR ELEMENT DE LA BOUTIQUE (EN DEHORS DES ANIMAUX)
function BuyingParser() {
	var id = SHOP[DRAGGABLE_ITEM]["id"];
	switch (id) {
		case 'Cat': 		QUOTIENT_CLICK++;													break;
		case 'Dog': 		AUTO_CLICK += 5;													break;
		case 'LittleGirl': 	STOCK_MAXI += 100;													break;
		case 'LittleBoy': 	SELL_MAXI += 50;													break;
		case 'Farmer1': 	QUOTIENT_CLICK += 2;												break;
		case 'Farmer2': 	AUTO_CLICK += 10;													break;
		case 'Chicken3': 	$("#TGE").show(0); QUOTIENT_GOLD += 0.015;							break;
		case 'Magician1': 	BOOST_LUCK++; $("#TME").show(0); $("#BB").show(0);					break;
		case 'Angel1': 		REGEN_HP++;															break;
		case 'Guard1': 		HERO_HP_MAX += 30; HERO_HP += 30; HERO_DAMAGE += 3;					break;
		case 'Voyante': 	$("#ennemiTimer").toggleClass("ennemiTimerHide ennemiTimerShow");	break;
		case 'Farmer3': 	QUOTIENT_CLICK += 200;												break;
		case 'Farmer4': 	AUTO_CLICK += 100;													break;
		case 'Magician2': 	BOOST_LUCK += 3; $("#combat-spell1").show(0);						break;
		case 'Bikini': 		EGG_COST *= 2;														break;
		case 'Chicken6': 	QUOTIENT_GOLD += 0.085;												break;
		case 'Guard2': 		HERO_HP_MAX += 200; HERO_HP += 200; HERO_DAMAGE += 20;				break;
		case 'Magician3': 	BOOST_LUCK += 6; $("#combat-spell2").show(0);						break;
		case 'Angel2': 		REGEN_HP += 10;														break;
		case 'Magician4': 	BOOST_LUCK += 10; $("#combat-spell3").show(0);						break;
		case 'Bunny': 		SELL_LOADING /= 2; 													break;
		case 'Queen': 		STOCK_MAXI += 5000000000;											break;
		case 'King': 		SELL_MAXI += 1000000000;											break;
		case 'Guard3': 		HERO_HP_MAX += 1500; HERO_HP += 1500; HERO_DAMAGE += 150;			break;

		case 'Plant0': 		SELL_MAXI += 100;													break;
		case 'Plant1': 		SELL_MAXI += 1000;													break;
		case 'Plant2': 		SELL_MAXI += 2000;													break;
		case 'Plant3': 		SELL_MAXI += 5000;													break;
		case 'Plant4': 		SELL_MAXI += 10000;													break;
		case 'Plant5': 		SELL_MAXI += 50000;													break;
		case 'Tonn1': 		STOCK_MAXI += 1000;													break;
		case 'Tonn2': 		STOCK_MAXI += 100000;												break;
		case 'Bite': 		STOCK_MAXI += 500000; SELL_MAXI += 500000;							break;
		case 'StatutD': 																		break;
		case 'Relique': 	BOOST_QUOTIENT *= 2;												break;
		case 'MagicalC': 	BOOST_DURATION *= 2;												break;
		case 'House1': 		STOCK_MAXI += 500;													break;
		case 'House2': 		STOCK_MAXI += 5000000;												break;
		default: 			alert('SHOP NON IDENTIFIE : ' + id);								break;
	}
}

// FONCTION D'AJOUT D'ELEMENT A LA BOUTIQUE
function addShopItem(image, idShop, name, prix, prixOOr, prixOMag, lock, toUnlock, multi, unique, bonus, animation, size, bonusDesc, desc) {
	var path = 'images/shop/BIG_';
	var tab = new Array();
	var spl = size.split('x');
	var x = parseInt(spl[0]);
	var y = parseInt(spl[1]);

	tab["id"] = image;				// L'ID DE L'ELEMENT (= IMAGE)
	tab["image"] = image;			// STRING EGALE A L'IMAGE
	tab["idShop"] = idShop;			// ID DE L'ONGLET DE LA BOUTIQUE
	tab["name"] = name;				// NOM DE L'ELEMENT POUR AFFICHAGE
	tab["bonus"] = bonus;			// BONUS EN OEUF / SEC (SEULEMENT POUR ANIMAUX)
	tab["animation"] = animation;	// TRUE == ANIME / FALSE == NON ANIME
	tab["bonusDesc"] = bonusDesc;	// DESCRIPTION DU BONUS POUR AFFICHAGE
	tab["lock"] = lock;				// EST-IL VEROUILLE ? (TRUE OU FALSE)
	tab["toUnlock"] = toUnlock;		// ID DE L'ELEMENT A DEVEROUILLE APRES ACHAT
	tab["multi"] = multi;			// MULTIPLICATION DU PRIX APRES UN ACHAT
	//tab["desc"] = desc;			// DESCRIPTION DE L'OBJET POUR AFFICHAGE (NON MEMORISER CAR TROP LOURD, OUBLIER APRES AFFICHAGE)
	tab["prix"] = prix;				// PRIX DE DEPART DE L'OBJET (OEUF POUR ANIMAUX, LE RESTE EN DOLLAR)
	tab["prixOOr"] = prixOOr;		// PRIX EN OEUF D'OR
	tab["prixOMag"] = prixOMag;		// PRIX EN OEUF MAGIQUE
	tab["unique"] = unique;			// EST-IL UNIQUE ?
	tab["x"] = x;					// TAILLE X EN BLOCK
	tab["y"] = y;					// TAILLE Y EN BLOCK

	IMAGES_TO_LOAD[SHOPPOINTER] = 'images/shop/SPRITE_' + image + '.gif';

	var uniqueSpan = '';

	if (unique == true) uniqueSpan = '<span id="shopUnique' + SHOPPOINTER + '" class="shop-unique">Unique</span>';
	else uniqueSpan = "";

	var unite = "";

	if (idShop == "pets") unite = "<div class='verysmalleggs'></div>";
	else unite = "<div class='verysmalldollar'></div>";

	SHOP[SHOPPOINTER] = tab;

	var secondprice = "";

	if (prixOOr > 0) { secondprice = "<b> + " + printNB(prixOOr) + "</b><div class='verysmallgold'></div>"; }
	if (prixOMag > 0) { secondprice += "<b> + " + printNB(prixOMag) + "</b><div class='verysmallmagie'></div>"; }

	var display = "none";

	if (lock == 0) display = "block";

	$('#shop-' + idShop).append('<li class="buyOFF" id="li' + SHOPPOINTER + '" style="display: ' + display + ';"><div class="portrait" id="shopItem' + SHOPPOINTER + '" onMouseDown="javascript: SelectItem(' + SHOPPOINTER + ');" style="background-image: url(\'' + path + image + '.png\');"></div><span class="shop-name">' + name + '</span><span class="shop-bonus">' + bonusDesc + '</span><span id="shop-prix' + SHOPPOINTER + '" class="shop-prix"><i>Prix: </i><b id="prix-' + SHOPPOINTER + '">' + printNB(prix) + "</b>" + unite + secondprice + '</span><span class="shop-desc">' + desc + '</span>' + uniqueSpan + '</li>');
	setDraggable('shopItem' + SHOPPOINTER);
	SHOPPOINTER++;
}

// AJOUTE UN ITEM SUR UN BLOCK (ACHAT BOUTIQUE OU DEPLACEMENT)
function doAddItem(idBlock) {
	var bgImg = 0;
	var width = 0;
	var height = 0;
	var idPet = DRAGGABLE_ITEM;
	var Class = '';
	var decalH = '';
	var decalV = '';

	if (ANCIENT_MOVE != "X") {
		var x_pos, y_pos, x_max, y_max, idPet, old_y_max;
		var spl = ANCIENT_MOVE.split('-');
		var y = parseInt(spl[1]) + 1;
		var x = parseInt(spl[2]) + 1;

		idPet = PETS[ANCIENT_MOVE];

		bgImg = $('#sprite-' + ANCIENT_MOVE).css("background-image");
		width = $('#sprite-' + ANCIENT_MOVE).css("width");
		height = $('#sprite-' + ANCIENT_MOVE).css("height");
		x_max = SHOP[idPet]["x"];
		y_max = SHOP[idPet]["y"];
		old_y_max = y_max;
		while (x_max > 0) {
			y_max = old_y_max;
			while (y_max > 0) {
				MAP[x - x_max][y - y_max] = 0;
				y_max--;
			}
			x_max--;
		}
		if (SHOP[idPet]["animation"] == 1) {
			$('#sprite-' + ANCIENT_MOVE).animateSprite("stopAnimation");
			Class = 'spriteAnim';
		}
		$('#sprite-' + ANCIENT_MOVE).remove();
		delete(PETS[ANCIENT_MOVE]);
		ANCIENT_MOVE = "X";
	}
	else  {
		if (PAYER1 < PRICE1 || PAYER2 < PRICE2 || PAYER3 < PRICE3) { return ; }
		BLOCKTODROP = idBlock;
		doBuy(DRAGGABLE_ITEM);
		bgImg = 'url(images/shop/SPRITE_' + SHOP[DRAGGABLE_ITEM]["image"] + '.gif)';
		width = SHOP[DRAGGABLE_ITEM]["width"] + 'px';
		height = SHOP[DRAGGABLE_ITEM]["height"] + 'px';
		if (SHOP[DRAGGABLE_ITEM]["animation"] == 1)
			Class = 'spriteAnim';
	}
	if (SHOP[idPet]["width"] < 38) decalH = 'margin-right: ' + (38 - SHOP[idPet]["width"]) / 2 + 'px;';
	if (SHOP[idPet]["height"] < 38) decalV = 'margin-bottom: ' + (38 - SHOP[idPet]["height"]) / 2 + 'px;';
	$('#' + idBlock).append('<div onMouseDown="doMoveItem(\'' + idBlock + '\');" id="sprite-' + idBlock + '" class="sprite ' + Class + '" style=\'background-image:' + bgImg + ';width: ' + width + '; height: ' + height + ';' + decalH + decalV + '\'></div>');
	setDraggable('sprite-' + idBlock);
	if (SHOP[idPet]["animation"] == 1) {
		$('#sprite-' + idBlock).animateSprite({
			columns: 5,
			totalFrames: 5,
			duration: 700,
			loop: false,
			complete: function() {
				setTimeout(function() {
					$('#sprite-' + idBlock).animateSprite("restartAnimation");
				}, SPRITE_DELAY);
			}
		});
		if ($('#buttonVideo').hasClass("buttonPlay"))
			$('#sprite-' + idBlock).animateSprite("stopAnimation");
	}
	PETS[idBlock] = idPet;
}

// ENREGISTRE UN ID DANS LE CAS D'UN DEPLACEMENT D'UN ITEM DE LA CARTE (PAS D'ACHAT)
function doMoveItem(idBlock) { ANCIENT_MOVE = idBlock; }

// FONCTION QUI PERMET D'AFFICHER CORRECTEMENT UN NOMBRE (AVEC LES ESPACES)
function printNB(nbr) {
	var nombre = '' + nbr;
	var retour = '';
	var c = 0;

	for (var i = nombre.length-1 ; i >= 0 ; i--) {
		if(c !=0 && c % 3 == 0) retour = nombre[i] + ' ' + retour ;
		else retour = nombre[i] + retour ;
		c++;
	}
	return (retour);
}

// MISE A JOUR DE TOUTES LES INFOS DU JEU (SAUF NOMBRE D'OEUFS ET TEMPS JEU) A EXECUTER MANUELLEMENT
function UpdateInfos() {
	var nb = (QUOTIENT_AUTO + ((AUTO_CLICK * QUOTIENT_CLICK)) / 10);
	$("#eggsbysec").html(printNB(Math.floor(nb)));
	$("#eggsprice").html(printNB(EGG_COST) + ' $');
	$("#clicgain").html(printNB(Math.floor(QUOTIENT_CLICK)));
	$("#autoclic").html(printNB(AUTO_CLICK));
	$("#boosttime").html(BOOST_DURATION + " sec");
	$("#boostmult").html(BOOST_QUOTIENT);
	$("#goldeggbysec").html(QUOTIENT_GOLD + '');
	$("#selldelay").html(SELL_LOADING + " sec");
	$("#hpregen").html(REGEN_HP + " HP / sec");
	$("#heroclicquot").html(printNB(HERO_CLICK_QUOT));
	$("#ennemywave").html(printNB(ENNEMY_WAVE));
	$("#nextennemy").html(NEXT_ENNEMY);
	$("#stockmaxi").html(printNB(STOCK_MAXI));
	$("#sellmaxi").html(printNB(SELL_MAXI));
	$("#mapsize").html(ACTUAL_X + "x" + MAXI_Y);

	$('#pannelMoney').html(printNB(Math.floor(MONEY)));
	$('#pannelGoldEggs').html(printNB(Math.floor(GOLD_EGGS)));
	$('#pannelMagicEggs').html(printNB(MAGIC_EGGS));

	$("#info-name").html(HERO_NAME);
	$("#info-class").html(HERO_CLASS);
	$("#info-level").html((HERO_LEVEL) + '');
	$("#info-hp").html(printNB(HERO_HP));
	$("#info-hp-max").html(printNB(HERO_HP_MAX));
	$("#info-dmg").html(HERO_DAMAGE + '');
	$("#info-magie").html(BOOST_LUCK + '');
	$("#info-stock-max").html(STOCK_MAXI + '');
	$("#info-vente-max").html(SELL_MAXI + '');
}

function UpdateCombatInfos() {
	$("#c_info-hp").html((printNB(HERO_HP)));
	$("#c_info-hp-max").html((printNB(HERO_HP_MAX)));
	$("#c_info-dmg").html((HERO_DAMAGE) + '');
	$("#c_info-magie").html((BOOST_LUCK) + '');
	$("#c_info-magicegg").html((MAGIC_EGGS) + '');
	$("#c_info-class").html((HERO_CLASS));
	$("#c_info-level").html((HERO_LEVEL) + '');

	$("#c_info-hp-ennemy").html((printNB(HP_ENNEMY)));
	$("#c_info-hp-max-ennemy").html((printNB(HP_MAX_ENNEMY)));
	$("#c_info-dmg-ennemy").html((DMG_ENNEMY) + '');
}

// ENREGISTRE LA TAILLE (WIDTH + HEIGHT) D'UNE IMAGE (SI SPRITE, WIDTH / 4)
function getSpriteWidthHeight() {
	$('#Z').load(function(){
		if (SHOP[IMAGES_ARRAY_P]["animation"] == 1) SHOP[IMAGES_ARRAY_P]["width"] = $("#Z").width() / 4;
		else SHOP[IMAGES_ARRAY_P]["width"] = $("#Z").width();
		SHOP[IMAGES_ARRAY_P]["height"] = $("#Z").height();
		IMAGES_ARRAY_P++;
		if (IMAGES_ARRAY_P < SHOPPOINTER + 1) getSpriteWidthHeight();
	}).attr('src', 'images/shop/SPRITE_' + SHOP[IMAGES_ARRAY_P]["image"] + '.gif');
}

// EFFECTUE UN ACHAT A LA BOUTIQUE
function doBuy(idItem) {
	GOLD_EGGS -= SHOP[DRAGGABLE_ITEM]["prixOOr"];
	MAGIC_EGGS -= SHOP[DRAGGABLE_ITEM]["prixOMag"];
	if (SHOP[DRAGGABLE_ITEM]["prixOMag"] > 0 && MAGIC_EGGS <= 0) {
		$('#booster').toggleClass("buttonON buttonOFF");
		$('#boostLoagingInside').css("width", "0%");
	}
	if (SHOP[DRAGGABLE_ITEM]["idShop"] == "pets") {
		EGGS -= SHOP[DRAGGABLE_ITEM]["prix"];
		QUOTIENT_AUTO += SHOP[DRAGGABLE_ITEM]["bonus"];
	}
	else {
		MONEY -= SHOP[DRAGGABLE_ITEM]["prix"];
		BuyingParser();
	}
	UpdateInfos();
	if (SHOP[DRAGGABLE_ITEM]["unique"] == 1) {
		cancelDraggable("shopItem" + DRAGGABLE_ITEM);
		if ($("#" + "li" + DRAGGABLE_ITEM).hasClass("buyON"))  $("#" + "li" + DRAGGABLE_ITEM).toggleClass("buyON buyTOFF");
		if ($("#" + "li" + DRAGGABLE_ITEM).hasClass("buyOFF")) $("#" + "li" + DRAGGABLE_ITEM).toggleClass("buyOFF buyTOFF");
		$('#li' + DRAGGABLE_ITEM).css("color", "#959595");
		$('#shop-prix' + DRAGGABLE_ITEM).remove();
		$('#shopUnique' + DRAGGABLE_ITEM).remove();
		$('#li' + DRAGGABLE_ITEM + ' .shop-desc').remove();
	}
	SHOP[DRAGGABLE_ITEM]["prix"] *= SHOP[DRAGGABLE_ITEM]["multi"];
	SHOP[DRAGGABLE_ITEM]["prix"] = Math.floor(SHOP[DRAGGABLE_ITEM]["prix"]);
	$("#prix-" + DRAGGABLE_ITEM).html('' + printNB(SHOP[DRAGGABLE_ITEM]["prix"]));

	var flag = 0;
	if (SHOP[DRAGGABLE_ITEM]["toUnlock"] != "0") {
		for (var key in SHOP) {
			if (SHOP[key]["id"] == SHOP[DRAGGABLE_ITEM]["toUnlock"] && flag == 0) {
				$("#li" + key).show(0);
				SHOP[DRAGGABLE_ITEM]["toUnlock"] = "0";
				flag = 1;
			}
		}
	}
}

// FONCTION QUI EFFECTUE L'ACHAT D'UNE RED POTION
function doBuyRedPotion() {
	var toAdd;

	if (MONEY < PRICE_POTION) return;
	MONEY -= PRICE_POTION;
	toAdd = (10 * HERO_HP_MAX) / 100;
	HERO_HP += toAdd;
	if (HERO_HP > HERO_HP_MAX) HERO_HP = HERO_HP_MAX;
	UpdateInfos();
	PRICE_POTION *= QUOT_POTION;
	$("#prix-potion").html('' + Math.floor(PRICE_POTION));
}

// FONCTON JQUERY POUR ANIMER UNE ROTATION
$.fn.animateRotate = function(angle, duration, easing, complete) {
	var args = $.speed(duration, easing, complete);
	var step = args.step;
	return this.each(function(i, e) {
		args.step = function(now) {
			$.style(e, 'transform', 'rotate(' + now + 'deg)');
			if (step) return step.apply(this, arguments);
		};

		$({deg: 0}).animate({deg: angle}, args);
	});
};

// ENREGISTRE UN ID DANS LE CAS D'UN ACHAT A LA BOUTIQUE
function SelectItem(idItem) { 
	ANCIENT_MOVE = "X";
	DRAGGABLE_ITEM = idItem;

	if (SHOP[idItem]["idShop"] == "pets") PAYER1 = EGGS;
	else PAYER1 = MONEY;
	if (SHOP[idItem]["prixOOr"] > 0) {
		PAYER2 = GOLD_EGGS;
		PRICE2 = SHOP[idItem]["prixOOr"];
	}
	else {
		PAYER2 = 0;
		PRICE2 = 0;
	}
	if (SHOP[idItem]["prixOMag"] > 0) {
		PAYER3 = MAGIC_EGGS;
		PRICE3 = SHOP[idItem]["prixOMag"];
	}
	else {
		PAYER3 = 0;
		PRICE3 = 0;
	}
	PRICE1 = SHOP[idItem]["prix"];
}

// L'ELEMENT ID DEVIENT DRAGGABLE (DEPLACABLE)
function setDraggable(id) {
	$('#' + id).draggable( {
		appendTo: 'body',
		containment: 'window',
		revert: false,
		cursor: 'none',
		helper: 'clone',
		scroll: false,
		start: function()  {
			if (ANCIENT_MOVE == "X") {
				if (PAYER1 < PRICE1 || PAYER2 < PRICE2 || PAYER3 < PRICE3) { $('.ui-draggable-dragging').css('display', 'none'); }
				$('.ui-draggable-dragging').css('background-image', 'url(\'' + "images/shop/SPRITE_" + SHOP[DRAGGABLE_ITEM]["image"] + '.gif\')');
				$('.ui-draggable-dragging').css('width', SHOP[DRAGGABLE_ITEM]["width"]);
				$('.ui-draggable-dragging').css('height', SHOP[DRAGGABLE_ITEM]["height"]);
			}
		},
		stop: function() { 
			$('body').css('cursor', 'auto');
			while ($('div[id^=mapOverlay]').length > 0) $("#mapOverlay").remove();
		}
	});
}

// L'ELEMENT ID DEVIENT DROPPABLE (PRINCIPALEMENT LE CALCUL DU MULTI-BLOCK)
function setDroppable(id) {
	$("#" + id).droppable( {
		drop: function() {
			if ($("#mapOverlay").hasClass("overlayGreen") || $("#mapOverlay").hasClass("overlayYellow")) {
				var x_pos, y_pos, x_max, y_max, idPet, old_y_max;

				var spl = this.id.split('-');

				var y = parseInt(spl[1]);
				var x = parseInt(spl[2]);

				if (ANCIENT_MOVE == "X") idPet = DRAGGABLE_ITEM;
				else idPet = PETS[ANCIENT_MOVE];

				x_max = SHOP[idPet]["x"];
				y_max = SHOP[idPet]["y"];

				old_y_max = y_max;

				x_pos = x + (Math.floor(x_max / 2)) - 1;
				y_pos = y + (Math.floor(y_max / 2)) - 1;

				if (x_max % 2 != 0) x_pos++;
				if (y_max % 2 != 0) y_pos++;

				doAddItem('mb-' + y_pos + '-' + x_pos);

				while (x_max > 0) {
					y_max = old_y_max;
					while (y_max > 0) {
						MAP[x_pos - x_max + 1][y_pos - y_max + 1] = 1;
						y_max--;
					}
					x_max--;
				}
			}
		},
		over: function() {
			var id = this.id, spl = id.split('-'), y = parseInt(spl[1]), x = parseInt(spl[2]), x_max, y_max, x_pos, y_pos, flag = 0, old_y_max, old_x_max, Oclass, idPet, occurence = 0;

			if (ANCIENT_MOVE == "X" && (PAYER1 < PRICE1 || PAYER2 < PRICE2 || PAYER3 < PRICE3)) return;

			if (ANCIENT_MOVE == "X") idPet = DRAGGABLE_ITEM;
			else idPet = PETS[ANCIENT_MOVE];

			x_max = SHOP[idPet]["x"];
			y_max = SHOP[idPet]["y"];

			x_pos = x - (Math.floor(x_max / 2));
			y_pos = y - (Math.floor(y_max / 2));

			old_y_max = y_max;
			old_x_max = x_max;

			if (x_pos >= 1 && y_pos >= 1 && (x_pos + x_max) <= ACTUAL_X && (y_pos + y_max) <= (MAXI_Y + 1)) {
				while (x_max > 0) {
					y_max = old_y_max;
					while (y_max > 0) {
						if (MAP[x_pos + x_max - 1][y_pos + y_max - 1] == 1) flag = 1;
						y_max--;
					}
					x_max--;
				}
			}
			else flag = 1;


			if (flag == 0)      Oclass = "overlayGreen";
			else if (flag == 1) Oclass = "overlayRed";

			while ($('div[id^=mapOverlay]').length > 0) $("#mapOverlay").remove();
			$("#map").append("<div class='" + Oclass + "' id='mapOverlay' style='width: " + (old_x_max * 38) + "px;height: " + (old_y_max * 38) + "px;left: " + (x_pos * 38) + "px;top: " + (y_pos * 38) + "px;'></div>");
		},
		out: function() { }
	});
}

// VERROUILLE UN BLOC POUR UN DRAG || DROP
function cancelDraggable(id) { 
	$('#' + id).draggable('disable');
	$('#' + id).on('dragstart', function(event) { event.preventDefault(); });
}

// AJOUTE LES PREMIERS BLOCKS LORS DU LANCEMENT DU JEU
function addFirstBlocks() {
	var i = 1;
	var j = 0;

	while (j < STARTING_BLOCK) {
		addBlocks();
		j++;
	}
	
	MAP[0] = new Array();

	$('#' + 'ml-' + 0).width($('#' + 'ml-' + i).width() + 38);
	$('#' + 'ml-' + 0).append('<div class="block block-top-left" style="background-image: url(\'images/environment/environment1.png\');"></div>');
	while (i <= MAXI_Y) {
		$('#' + 'ml-' + i).width($('#' + 'ml-' + i).width() + 38);
		$('#' + 'ml-' + i).append('<div class="block block-center-left" style="background-image: url(\'images/environment/environment1.png\');"></div>');
		i++;
	}
	$('#' + 'ml-' + 11).width($('#' + 'ml-' + i).width() + 38);
	$('#' + 'ml-' + 11).append('<div class="block block-bottom-left" style="background-image: url(\'images/environment/environment1.png\');"></div>');
}

// AJOUTE UNE COlONNE DE TERRAIN
function addBlocks() {
	var i = 1;

	MAP[ACTUAL_X] = new Array();
	MAP[ACTUAL_X][0] = 0;
	$('#' + 'ml-' + 0).width($('#' + 'ml-' + i).width() + 38);
	$('#' + 'ml-' + 0).append('<div class="block block-top-center" style="margin-left: ' + (ACTUAL_X) * 38 + 'px;background-image: url(\'images/environment/environment' + ACTUAL_LAND + '.png\');"></div>');
	$('#limitTop').remove();
	$('#' + 'ml-' + 0).append('<div class="block block-top-right" id="limitTop" style="margin-left: ' + (ACTUAL_X  + 1)* 38 + 'px;background-image: url(\'images/environment/environment' + ACTUAL_LAND + '.png\');"></div>');
	while (i <= MAXI_Y) {
		$('#' + 'ml-' + i).width($('#' + 'ml-' + i).width() + 38);
		$('#limitCenter' + i).remove();
		$('#' + 'ml-' + i).append('<div class="block block-center-center" id="mb-' + i + '-' + ACTUAL_X + '" style="margin-left: ' + (ACTUAL_X) * 38 + 'px"></div>');
		setDroppable('mb-' + i + '-' + ACTUAL_X, 0);
		$('#' + 'ml-' + i).append('<div class="block block-center-right" id="limitCenter' + i + '" style="margin-left: ' + (ACTUAL_X  + 1)* 38 + 'px;background-image: url(\'images/environment/environment' + ACTUAL_LAND + '.png\');"></div>');
		i++;
	}
	$('#' + 'ml-' + 11).width($('#' + 'ml-' + 11).width() + 38);
	$('#' + 'ml-' + 11).append('<div class="block block-bottom-center" style="margin-left: ' + (ACTUAL_X) * 38 + 'px;background-image: url(\'images/environment/environment' + ACTUAL_LAND + '.png\');"></div>');
	$('#limitBottom').remove();
	$('#' + 'ml-' + 11).append('<div class="block block-bottom-right" id="limitBottom" style="margin-left: ' + (ACTUAL_X  + 1)* 38 + 'px;background-image: url(\'images/environment/environment' + ACTUAL_LAND + '.png\');"></div>');
	ACTUAL_X++;
}

// PERMET LE SWITCH D'ONGLET DE LA BOUTIQUE
function displayOnglet(idShop) {
	var id = $('#' + idShop).attr("id");
	var spl = id.split('-');
	var currentIdShop = spl[1];

	$('#shop-' + LAST_SHOP_ID).hide(0);
	$('#onglet-shop-' + LAST_SHOP_ID).toggleClass("ongletON ongletOFF");
	$('#' + idShop).show(0);
	$('#onglet-' + idShop).toggleClass("ongletOFF ongletON");
	LAST_SHOP_ID = currentIdShop;
}

// OUVERTURE D'UNE FENETRE POP-UP
function openPopUp(title, width, height, content) {
	$("#popup").css("top", "calc(50% - " + height / 2 + "px)");
	$("#popup").css("left", "calc(50% - " + width / 2 + "px)");
	$("#popup").css("height", height + "px");
	$("#popup").css("width", width + "px");
	$("#popup-header").html(title);
	$("#popup-content").html(content);
	$("#modal").fadeIn(400, function() {
		$("#popup").fadeIn(400);
	});
}

// FERMETURE D'UNE FENETRE POP-UP
function closePopUp() {
	$("#popup").fadeOut(0, function() {
		$("#popup-content").html('');
		$("#modal").fadeOut(500);
	});
}

// FONCTION DE CLIC SUR L'OEUF
function clickEgg() {
	var toAdd = QUOTIENT_CLICK;
	if (ACTUAL_BOOST == 1) toAdd *= BOOST_QUOTIENT;
	if (EGGS + toAdd > STOCK_MAXI) toAdd = STOCK_MAXI - EGGS;
	EGGS += toAdd;
}

// FONCTION DE VENTE DES OEUFS
function doSell() {
	if ($('#sell').hasClass('buttonON')) {
		if (EGGS > SELL_MAXI) { nbToSell = SELL_MAXI; }
		else { nbToSell = EGGS; }
		MONEY += (nbToSell * EGG_COST);
		EGGS -= nbToSell;
		UpdateInfos();
		$('#sell').toggleClass("buttonON buttonOFF");
		$('#sellLoagingInside').animate({width: 0}, SELL_LOADING * 1000, "linear", function() {
			$('#sellLoagingInside').css("width", "100%");
			$('#sell').toggleClass("buttonOFF buttonON");
		});
	}
}

// FONCTION DE LANCEMENT DU BOOST
function doMagic() {
	if ($('#booster').hasClass('buttonON')) {
		ACTUAL_BOOST = 1;
		MAGIC_EGGS--;
		UpdateInfos();
		$('#booster').toggleClass("buttonON buttonOFF");
		$('#boostLoagingInside').animate({width: 0}, BOOST_DURATION * 1000, "linear", function() {
			ACTUAL_BOOST = 0;
			if (MAGIC_EGGS > 0) {
				$('#boostLoagingInside').css("width", "100%");
				$('#booster').toggleClass("buttonOFF buttonON");
			}
		});
	}
}

// QUAND ON CLIC SUR UN OEUF MAGIQUE
function clickOnMagic() {
	$("#magicEgg").stop();
	$("#magicEgg").hide(0);
	$("#magicEggClick").hide(0);
	LOCK_MAGIC = 0;
	MAGIC_EGGS++;
	if (MAGIC_EGGS > 0 && ACTUAL_BOOST == 0 && $('#booster').hasClass('buttonOFF')) {
		$('#boostLoagingInside').css("width", "100%");
		$('#booster').toggleClass("buttonOFF buttonON");
	}
	UpdateInfos();
}

// FONCTION QUI PERMET D'ACHETER UNE COLONNE POUR LA MAP
function doBuyAddBlock() {
	if (MONEY < PRICE_AREA) return ;
	MONEY -= PRICE_AREA;
	addBlocks();
	UpdateInfos();
	PRICE_AREA *= QUOT_AREA;
	$("#prix-area").html('' + Math.floor(PRICE_AREA));
}

// FONCTION D'APPUI SUR LE BOUTON DE LA VIDEO
function switchVideo() {
	if ($('#buttonVideo').hasClass("buttonPause")) {
		$('#buttonVideo').toggleClass("buttonPause buttonPlay");
		$(".spriteAnim").animateSprite("stopAnimation");
		$("#aura").hide(0);
	}
	else {
		$('#buttonVideo').toggleClass("buttonPlay buttonPause");
		$(".spriteAnim").animateSprite("restartAnimation");
		$("#aura").show(0);
	}
}

// FONCTION DE CHANGEMENT D'ENVIRONNEMENT
function loadNewEnvironment() {
	ACTUAL_LAND++;
	$(".block-bottom-center").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-bottom-left").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-bottom-right").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-center-left").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-center-right").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-top-center").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-top-left").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".block-top-right").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + ".png\')");
	$(".mapLine").css("background-image", 'url(\'images/environment/environment' + ACTUAL_LAND + "-block.png\')");
}

// FONCTION QUI MONTRE OU NON LES ELEMENTS ACHATABLE DE LA BOUTIQUE
function updateShopBuyable() {
	setInterval(function() {
		var actual_money = MONEY;

		if (LAST_SHOP_ID == "pets") actual_money = EGGS;
		for (var key in SHOP) {
			if (SHOP[key]["idShop"] == LAST_SHOP_ID) {
				if (actual_money >= SHOP[key]["prix"] && GOLD_EGGS >= SHOP[key]["prixOOr"] && MAGIC_EGGS >= SHOP[key]["prixOMag"] && $('#li' + key).hasClass("buyOFF"))
					$('#li' + key).toggleClass("buyOFF buyON");
				else if ((actual_money < SHOP[key]["prix"] || GOLD_EGGS < SHOP[key]["prixOOr"] || MAGIC_EGGS < SHOP[key]["prixOMag"]) && $('#li' + key).hasClass("buyON")) {
					$('#li' + key).toggleClass("buyON buyOFF");
				}
			}
		}
		if (LAST_SHOP_ID == "upgrade") {
			if (MONEY < PRICE_AREA && $("#uli-area").hasClass('buyON')) $("#uli-area").toggleClass("buyON buyOFF");
			else if (MONEY > PRICE_AREA && $("#uli-area").hasClass('buyOFF')) $("#uli-area").toggleClass("buyOFF buyON");
			if (MONEY < PRICE_POTION && $("#uli-potion").hasClass('buyON')) $("#uli-potion").toggleClass("buyON buyOFF");
			else if (MONEY > PRICE_POTION && $("#uli-potion").hasClass('buyOFF')) $("#uli-potion").toggleClass("buyOFF buyON");
		}
	}, 250);
}

// ACTIVATION DU MODE PAUSE
function doPause() {
	PAUSE = 1;
	$('#ennemiTimerInside').stop();
	openPopUp('Jeu en pause', 350, 160, $("#paused").html());
}

// RETRAIT DU MODE PAUSE
function doUnPause() {
	var w1 = $("#ennemiTimer").width();
	var w2 = $("#ennemiTimerInside").width();
	DURATION_ATT = Math.floor((w2 * 100) / w1);
	COMBAT_INCOME = 0;
	closePopUp();
	PAUSE = 0;
}

// FONCTION QUI LANCE UN SORT (AVEC ANIMATION)
function doSpell(spell, on) {
	var top, left;

	if (on == "hero") { top = "10px"; left = "10px"; }
	else { top = "60px"; left = "210px"; }
	$("#combat-big" + on).append('<div id="spell"></div>')
	$("#spell").show(0);
	$("#spell").css("margin-top", top);
	$("#spell").css("margin-left", left);
	$("#spell").css('background-image', 'url(\'images/spells/' + spell + '.png\')');
	$('#spell').animateSprite({
		columns: 5,
		totalFrames: 5,
		duration: 400,
		loop: false,
		complete: function() {
			$("#spell").hide(0);
			$("#spell").remove();
		}
	});
}

// FONCTION QUI AFFICHE OU NON LES SORTS (COMBAT)
function toggleSpells() {
	$("#combat-spell1").toggleClass("buttonON buttonOFF");
	$("#combat-spell2").toggleClass("buttonON buttonOFF");
	$("#combat-spell3").toggleClass("buttonON buttonOFF");

	if ($("#combat-spell1").hasClass('buttonON')) {
		if ($("#combat-spell4").hasClass('buttonOFF') && MAGIC_EGGS >= 1) $("#combat-spell4").toggleClass("buttonOFF buttonON");
		if ($("#combat-spell5").hasClass('buttonOFF') && MAGIC_EGGS >= 2) $("#combat-spell5").toggleClass("buttonOFF buttonON");
		if ($("#combat-spell6").hasClass('buttonOFF') && MAGIC_EGGS >= 3) $("#combat-spell6").toggleClass("buttonOFF buttonON");
	}
	else {
		if ($("#combat-spell4").hasClass('buttonON')) $("#combat-spell4").toggleClass("buttonON buttonOFF");
		if ($("#combat-spell5").hasClass('buttonON')) $("#combat-spell5").toggleClass("buttonON buttonOFF");
		if ($("#combat-spell6").hasClass('buttonON')) $("#combat-spell6").toggleClass("buttonON buttonOFF");
	}
}

// FONCTION QUI MET FIN AU COMBAT
function doEndCombat() {
	if ($("#buttonEndCombat").hasClass("buttonOFF")) return ;
	if (ENNEMY[ENNEMY_WAVE]["environment"] == 1 && HP_ENNEMY == 0) loadNewEnvironment();
	closePopUp();
	$("#combat-bigenemy").show(0);
	$("#combat-bighero").show(0);
	$("#HBI_Enemy").css("width", "300px");
	LOCK_COMBAT = 0;
	UpdateInfos();
}

// FONCTION QUI DONNE UN LEVEL AU HERO
function doLevelUp() {
	HERO_DAMAGE += (HERO_LEVEL);
	HERO_HP_MAX += (HERO_LEVEL * 10);
	HERO_HP += (HERO_LEVEL * 10);
	HERO_LEVEL++;
}

// FONCTION QUI GERE L'ATTAQUE DU HERO
function doAttaqueHero() {
	var des = Math.floor((Math.random() * 40) + 1), flag, add;

	if ($("#combat-spell1").hasClass('buttonOFF')) return;
	toggleSpells();
	des -= 20;
	if (des < 0) { des *= -1; flag = 1; }
	add = Math.floor((HERO_DAMAGE * des) / 100);
	if (flag == 1) add *= -1;
	HP_ENNEMY -= HERO_DAMAGE + add;
	if (HP_ENNEMY < 0) HP_ENNEMY = 0;
	$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> attaque et inflige <b>" + printNB((HERO_DAMAGE + add)) + "</b> points de d&eacute;gats.<br />");
	$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
	doSpell('attack3', 'enemy');
	setTimeout(function() {
		var hp = (HP_ENNEMY * 100) / HP_MAX_ENNEMY;
		$('#HBI_Enemy').animate({width: hp * 3}, 500, "linear");
		UpdateCombatInfos();
		if (HP_ENNEMY == 0) doDeathEnnemy();
		else setTimeout(function() { doAttaqueEnnemy(); }, 1500);
	}, 700);
}

// FONCTION QUI VOLE L'ENNEMI
function doSteal() {
	var des = 0, add;

	if ($("#combat-spell1").hasClass('buttonOFF')) return;
	toggleSpells();
	while (des < 5) des = Math.floor((Math.random() * 20) + 1);
	add = Math.floor((ENNEMY[ENNEMY_WAVE]["dollar"] * des) / 100);
	MONEY += add;
	$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> d&eacute;robe " + add + " $<br />");
	$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
	doSpell('steal', 'enemy');
	UpdateInfos();
	if (HP_ENNEMY == 0) doDeathEnnemy();
	else setTimeout(function() { doAttaqueEnnemy(); }, 1500);
}

// INIALISE LA FUITE, LANCE LE DECOMPTE ET FAIS FUIR
function doLeak(flag) {
	if (flag == 1) {	// INITIALISATION DE LA FUITE
		if ($("#combat-spell3").hasClass('buttonOFF')) return;
		toggleSpells();
		LEAKAGE = LEAKAGE_ROUND - 1;
		$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> Fuit dans " + LEAKAGE + " tour(s)<br />");
		$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
		LEAKAGE--;
		if (HP_ENNEMY == 0) doDeathEnnemy();
		else setTimeout(function() { doAttaqueEnnemy(); }, 1500);
	}
	else {				// ON PASSE UN TOUR OU ON FUIT (SI LEAKAGE == 0)
		setTimeout(function() {
			if (LEAKAGE == 0) {
				$("#combat-bighero").fadeOut(1000);
				$("#combat-information").append("<span class='combat-info-bad'>Vous avez fuit le combat !</span><br />");
				$("#combat-information").append("<span class='combat-info-after'>Appuyez sur le bouton \"Terminer\" pour revenir au jeu.</span><br />");
				$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
				setTimeout(function() {
					$("#buttonEndCombat").toggleClass("buttonON buttonOFF");
				}, 1000);
			}
			else {
				$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> Fuit dans " + LEAKAGE + " tour(s)<br />");
				$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
				LEAKAGE--;
				setTimeout(function() { doAttaqueEnnemy(); }, 2000);
			}
		}, 1500);
	}
}

// GELE L'ENNEMI
function doIce() {
	if ($("#combat-spell4").hasClass('buttonOFF') || MAGIC_EGGS < 1) return;
	MAGIC_EGGS -= 1;
	toggleSpells();
	ICED = 3;
	doSpell('ice', 'enemy');
	$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> lance le sort \"<b>Prison de glace</b>\"<br />");
	$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
	if (HP_ENNEMY == 0) doDeathEnnemy();
	else setTimeout(function() { doAttaqueEnnemy(); }, 1500);
}

// LANCE LE SORT GUERISON
function doHeal() {
	if ($("#combat-spell5").hasClass('buttonOFF') || MAGIC_EGGS < 2) return;
	var toHeal = BOOST_LUCK * 50;
	var des = 0, flag = 0;

	MAGIC_EGGS -= 2;
	toggleSpells();

	des = Math.floor((Math.random() * 40) + 1) - 20;
	if (des < 0) { flag = 1 ; des *= -1; }
	if (flag == 0) toHeal = toHeal + (toHeal * des) / 100;
	else toHeal = toHeal - (toHeal * des) / 100;
	toHeal = Math.floor(toHeal);

	HERO_HP += toHeal;
	if (HERO_HP > HERO_HP_MAX) HERO_HP = HERO_HP_MAX;
	
	doSpell('heal', 'hero');
	$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> lance le sort \"<b>Gu&eacute;rison</b>\" et se gu&eacute;ri de <b>" + printNB(toHeal) + "</b> HP<br />");
	$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
	setTimeout(function() {
		var hp = (HERO_HP * 100) / HERO_HP_MAX;
		UpdateCombatInfos();
		$('#HBI_Hero').animate({width: hp * 3}, 1000, "linear");
		if (HP_ENNEMY == 0) doDeathEnnemy();
		else setTimeout(function() { doAttaqueEnnemy(); }, 1500);
	}, 700);
}

// LANCE LE SORT BRULURE DIVINE
function doDivine() {
	if ($("#combat-spell6").hasClass('buttonOFF') || MAGIC_EGGS < 3) return;

	var des = 0, flag = 0, toDeal = BOOST_LUCK * 200;

	MAGIC_EGGS -= 3;

	toggleSpells();

	doSpell('divine', 'enemy');

	des = Math.floor((Math.random() * 40) + 1) - 20;
	if (des < 0) { flag = 1 ; des *= -1; }
	if (flag == 0) toDeal = toDeal + (toDeal * des) / 100;
	else toDeal = toDeal - (toDeal * des) / 100;
	toDeal = Math.floor(toDeal);

	HP_ENNEMY -= toDeal;
	if (HP_ENNEMY < 0) HP_ENNEMY = 0;

	$("#combat-information").append("<span class='combat-info-hero'>" + HERO_NAME + "</span> lance le sort \"<b>Brulure divine</b>\" et inflige <b>" + printNB(toDeal) + "</b> points de d&eacute;gats.<br />");
	$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
	setTimeout(function() {
		var hp = (HP_ENNEMY * 100) / HP_MAX_ENNEMY;
		$('#HBI_Enemy').animate({width: hp * 3}, 500, "linear");
		UpdateCombatInfos();
		if (HP_ENNEMY == 0) doDeathEnnemy();
		else setTimeout(function() { doAttaqueEnnemy(); }, 1500);
	}, 700);
}

// FONCTION QUI GERE L'ATTAQUE DE L'ENNEMI
function doAttaqueEnnemy() {
	var des = Math.floor((Math.random() * 40) + 1), flag, add;

	if (ICED > 0) {
		ICED--;
		$("#combat-information").append("<span class='combat-info-enemy'>" + NAME_ENNEMY + "</span> est gel&eacute; et ne peut pas attaquer.<br />");
		$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
		setTimeout(function() {
			if (LEAKAGE != -1) doLeak(0);
			else toggleSpells();
		}, 700);
		return ;
	}


	des -= 20;
	if (des < 0) { des *= -1; flag = 1; }
	add = Math.floor((HERO_DAMAGE * des) / 100);
	if (flag == 1) add *= -1;
	HERO_HP -= DMG_ENNEMY + add;
	if (HERO_HP < 0) HERO_HP = 0;
	$("#combat-information").append("<span class='combat-info-enemy'>" + NAME_ENNEMY + "</span> attaque et inflige <b>" + printNB(DMG_ENNEMY + add) + "</b> points de d&eacute;gats.<br />");
	$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
	doSpell('attack1', 'hero');
	setTimeout(function() {
		var hp = (HERO_HP * 100) / HERO_HP_MAX;
		$('#HBI_Hero').animate({width: hp * 3}, 500, "linear");
		UpdateCombatInfos();
		if (HERO_HP == 0) doDeathHero();
		else setTimeout(function() {
			if (LEAKAGE != -1) doLeak(0);
			else toggleSpells();
		}, 700);
	}, 700);
	
}

// FONCTION QUI TUE LE HERO
function doDeathHero() {
	$("#combat-bighero").fadeOut(2000, function() {
		var lostMoney = Math.floor(HP_ENNEMY * 1.7);
		var lostEggs = Math.floor(HP_ENNEMY * 17);
		if (lostEggs > EGGS) lostEggs = EGGS;
		if (lostMoney > MONEY) lostMoney = MONEY;
		EGGS -= lostEggs;
		MONEY -= lostMoney;
		HERO_HP = (HERO_HP_MAX * AFTER_DEATH) / 100;
		$("#combat-information").append("<span class='combat-info-bad'>Vous avez perdus le combat !</span><br />");
		$("#combat-information").append("<span class='combat-info-after'>Vous perdez " + printNB(lostEggs) + "<div class='verysmalleggs'></div></span><br />");
		$("#combat-information").append("<span class='combat-info-after'>Vous perdez " + printNB(lostMoney) + "<div class='verysmalldollar'></div></span><br />");
		$("#combat-information").append("<span class='combat-info-after'>Appuyez sur le bouton \"Terminer\" pour revenir au jeu.</span><br />");
		$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
		setTimeout(function() {
			setTimeout(function() { $("#buttonEndCombat").toggleClass("buttonON buttonOFF"); }, 4000);
		}, 100);
	});
}

// FONCTION QUI TUE L'ENNEMI
function doDeathEnnemy() {
	$("#combat-bigenemy").fadeOut(2000, function() {
		var bonusMoney = ENNEMY[ENNEMY_WAVE]["dollar"];
		$("#combat-information").append("<span class='combat-info-good'>Vous gagnez le combat !</span><br />");
		$("#combat-information").append("<span class='combat-info-after'>Vous gagnez " + printNB(bonusMoney) + "<div class='verysmalldollar'></div></span><br />");
		$("#combat-information").append("<span class='combat-info-after'>Niveau sup&eacute;rieur ! (+ " + printNB((HERO_LEVEL * 10)) + " HP max) (+ " + printNB(HERO_LEVEL) + " d&eacute;gats)</span><br />");
		$("#combat-information").append("<span class='combat-info-after'>Appuyez sur le bouton \"Terminer\" pour revenir au jeu.</span><br />");
		$('#combat-information').scrollTop($('#combat-information')[0].scrollHeight);
		doLevelUp();
		ENNEMY_WAVE++;
		setTimeout(function() {
			setTimeout(function() { $("#buttonEndCombat").toggleClass("buttonON buttonOFF"); }, 4000);
		}, 100);
	});
}

function updateSelectHeroInformation(idHero) {
	switch (idHero) {
		case 1 : case 2 :
		HERO_BONUS = '+ 5 Attaques / + 30 HP';
		HERO_CLASS = 'Chevalier';
		$("#heroDescription").html("Le chevalier est entrer tr&egrave;s jeune dans la Garde.<br />Tout au long de ces ann&eacute;es, il a pu acqu&eacute;rir une tr&egrave;s bonne endurance.<br />Le chevalier est autant &agrave; l\'aise en attaque que en d&eacute;fense.<br /><u>Bonne stabilit&eacute; tout au long de l'aventure.</u>");
		break;
		case 3 : case 4 :
		HERO_BONUS = '+ 20 Attaques';
		HERO_CLASS = 'Maitre d\'armes';
		$("#heroDescription").html("Le maitre d'armes &agrave; un temp&eacute;rament violent et est fan des armes.<br />Il croit que derri&egrave;re chaque arme se cache une &acirc;me d&eacute;chue.<br />Une meilleure attaque permet d'en finir rapidement avec vos ennemis.<br /><u>Efficace en d&eacute;but de partie.</u>");
		break;
		case 5 : case 6 :
		HERO_BONUS = '+ 80 HP';
		HERO_CLASS = 'Paladin';
		$("#heroDescription").html("Le paladin encaisse mieux les d&eacute;gats que les autres.<br />Ceci est certainement d&ucirc; &agrave; son armure, m&ecirc;me si il affirme le contraire.<br />Plus de points de vie permet de tenir plus longtemps dans le combat.<br /><u>Efficace en d&eacute;but de partie.</u>");
		break;
		case 7 : case 8 :
		HERO_BONUS = '+ 1 Magie';
		HERO_CLASS = 'Mage';
		$("#heroDescription").html("Pratiquant la magie noire, le mage est tr&egrave;s redout&eacute; des ennemis.<br />La magie am&eacute;liore vos d&eacute;gats magiques ainsi que le d&eacute;lais d'apparition des &oelig;ufs magiques.<br /><u>Efficace en fin de partie.</u>");
		break;
		case 9 : case 10 :
		HERO_BONUS = 'Potions et terrains moins chers';
		HERO_CLASS = 'Druide';
		$("#heroDescription").html("Le druide est proche de la nature et sait confectionner les potions.<br />Les potions de soins sont tr&egrave;s importantes pour la r&eacute;g&eacute;n&eacute;ration des HP en dehors des combats.<br /><u>Bonne stabilit&eacute; tout au long de l'aventure.</u>");
		break;
		case 11 : case 12 :
		HERO_BONUS = 'Le sort "Voler" est plus efficace';
		HERO_CLASS = 'Voleur';
		$("#heroDescription").html("Le voleur est d'une grande pr&eacute;cision et tout autant discret<br />Il use de subterfuge pour s'en faire plein les poches.<br />Le vole est un bon moyen pour se faire de l'argent sur le dos des ennemis.<br /><u>Efficace en fin de partie.</u>");
		break;
		case 13 : case 14 :
		HERO_BONUS = 'Les animaux sont moins chers';
		HERO_CLASS = 'Chasseur';
		$("#heroDescription").html("Le chasseur mettra tout son talent au service de la capture d'animaux.<br />Il connait le terrain et &agrave; un grand respect pour les animaux.<br />En outre, les animaux seront moins chers en &oelig;ufs.<br /><u>Bonne stabilit&eacute; tout au long de l'aventure.</u>");
		break;
		case 15 : case 16 :
		HERO_BONUS = 'Le sort "Fuir" est plus efficace';
		HERO_CLASS = 'Ninja';
		$("#heroDescription").html("Le ninja est rapide comme le vent et &agrave; un sens de l'&eacute;quilibre comme personne.<br />La fuite d'un combat est un bon moyen pour revenir &agrave; la charge plus tard mais mieux pr&eacute;par&eacute;.<br /><u>Efficace en fin de partie.</u>");
		break;
		case 17 : case 18 :
		HERO_BONUS = '+ 1 R&eacute;g&eacute;n&eacute;ration de HP';
		HERO_CLASS = 'Eccl&eacute;siastique';
		$("#heroDescription").html("L'eccl&eacute;siastique est adepte de la magie blanche.<br />La r&eacute;g&eacute;n&eacute;ration de sant&eacute; est primordiale afin d'&ecirc;tre mieux pr&eacute;parer pour le combat suivant.<br /><u>Efficace en fin de partie.</u>");
		break;
		case 19 : case 20 :
		HERO_BONUS = 'D&eacute;gats de d&eacute;part en combat';
		HERO_CLASS = 'Flingueur';
		$("#heroDescription").html("Personne ne sait d'ou viens le flingueur, il utilise une arme bien &eacute;trange.<br />Dot&eacute; d'une grande pr&eacute;cision, il est capable d'infliger des d&eacute;gats suppl&eacute;mentaires au d&eacute;but du combat.<br /><u>Efficace en d&eacute;but de partie.</u>");
		break;
	}
	$("#selectHeroClass").html(HERO_CLASS);
	$("#selectHeroBonus").html(HERO_BONUS);
}

function selectHero(idHero) {
	if (LAST_HERO != 0) {
		$("#heroCaseBig").removeClass('BIG_hero' + LAST_HERO);
		$("#combat-bighero").removeClass('BIG_hero' + LAST_HERO);
		$("#FACE_hero" + LAST_HERO).removeClass('heroCaseFaceSelect');
	}
	$("#heroCaseBig").addClass('BIG_hero' + idHero);
	$("#FACE_hero" + idHero).addClass('heroCaseFaceSelect');
	$("#heroName").focus();
	HERO_ID = idHero;
	LAST_HERO = idHero;
	updateSelectHeroInformation(idHero);
	HERO_NAME = $("#heroName").val();
	$("#combat-bighero").addClass('BIG_hero' + idHero);
	$("#portraitHero").css('background-position', $("#FACE_hero" + idHero).css('background-position'));
	UpdateInfos();
}

function checkName() {
	if ($("#heroName").val().length > 1 && $("#buttonOkHero").hasClass("buttonOFF"))
		$("#buttonOkHero").toggleClass('buttonOFF buttonON');
	else if ($("#heroName").val().length <= 1 && $("#buttonOkHero").hasClass("buttonON"))
		$("#buttonOkHero").toggleClass('buttonON buttonOFF');
	$("#info-name").html($("#heroName").val());
}

function validHero() {
	if ($("#buttonOkHero").hasClass("buttonOFF")) return ;

	HERO_NAME = $("#heroName").val();
	$("#portraitHero").addClass('BIG_hero' + LAST_HERO);
	UpdateInfos();
	addShopItem('hero' + HERO_ID, "build", HERO_NAME, 0, 0,  0, 0, "0", 0, true, 0, 1, "1x1", HERO_BONUS, "Vous !");
	SHOP[SHOPPOINTER - 1]["width"] = 32;
	SHOP[SHOPPOINTER - 1]["height"] = 48;
	closePopUp();
}

// LOOP QUI GERE L'INITIALISATION DES COMBATS
function doFightLoop() {
	setInterval(function() {
		var actual_hp;

		if (COMBAT_INCOME == 0 && LOCK_COMBAT == 0 && ENNEMY_WAVE < ENEMY_NB_MAX) {
			if (HERO_HP <= 0) HERO_HP = 1;
			COMBAT_INCOME = 1;
			$('#ennemiTimerInside').animate({width: 0}, DURATION_ATT * (COMBAT_DELAY * 1000) / 100, "linear", function() {
				COMBAT_INCOME = 0;
				LOCK_COMBAT = 1;
				LEAKAGE = -1;
				ICED = 0;
				HP_ENNEMY = ENNEMY[ENNEMY_WAVE]["hp"];
				HP_MAX_ENNEMY = ENNEMY[ENNEMY_WAVE]["hp"];
				DMG_ENNEMY = ENNEMY[ENNEMY_WAVE]["dmg"];
				NAME_ENNEMY = ENNEMY[ENNEMY_WAVE]["name"];
				actual_hp = ((HERO_HP * 100) / HERO_HP_MAX);
				$("#HBI_Hero").css("width", actual_hp + '%');
				$("#enemybg").css("background-image", "url('images/environment/enemyBG" + ACTUAL_LAND + ".jpg')");
				$("#combat-bigenemy").css("background-image", "url('images/enemies/" + ENNEMY[ENNEMY_WAVE]["id"] + ".png')");
				$("#enemyName").html(ENNEMY[ENNEMY_WAVE]["name"]);
				$("#c_heroName").html(HERO_NAME);
				$("#combat-information").html("<br /><span class='combat-info-before'>Pr&eacute;parez-vous pour le combat !</span><br />");
				openPopUp('Fen&ecirc;tre des combats', 1000, 700, $("#combatWindow").html());
				UpdateCombatInfos();
				toggleSpells();
				DURATION_ATT = 100;
				$('#ennemiTimerInside').css("width", "100%");
			});
}
}, 1000);
}

// LANCE UN CHRONO POUR COMPTER LE PLAYTIME (CHAQUE MINUTES) ET L'AFFICHE
function doChrono() {
	setInterval(function() {
		PLAY_TIME++;
		$("#playtime").html(PLAY_TIME + " min");
	}, 60000);
}

// CHANGE LE TITRE DYNAMIQUEMENT (POUR AFFICHER NOMBRE D'OEUFS)
function changeTitle() {
	setInterval(function() {
		document.title = printNB(Math.floor(EGGS)) + ' oeufs - EggsClicker';
	}, 1000);
}

// FONCTION QUI BOUCLE POUR ANIMER L'AURA
function doAura() {
	$('#aura').animateRotate(-360, 20000, "linear");
	setInterval(function() {
		$('#aura').animateRotate(-360, 20000, "linear");
	}, 20000);
}

// MISE A JOUR DU NOMBRE D'OEUFS (10 FOIS / SEC)
function IntervalUpdateEggs() {
	setInterval(function() {
		var toAdd = 0;

		if (LOCK_COMBAT == 1 || PAUSE == 1) return ;
		toAdd = QUOTIENT_AUTO / 10;
		toAdd += ((AUTO_CLICK * QUOTIENT_CLICK) / 100);
		if (ACTUAL_BOOST == 1) toAdd *= BOOST_QUOTIENT;
		if (EGGS + toAdd > STOCK_MAXI) EGGS = STOCK_MAXI;
		else EGGS += toAdd;
		$("#pannelEggs").html(printNB(Math.floor(EGGS)));
	}, 100);
}

// AJOUTE LES OEUFS D'OR A INTERVAL REGULIER
function IntervalUpdateGoldEggs() {
	setInterval(function() {
		if (LOCK_COMBAT == 1 || PAUSE == 1) return ;
		GOLD_EGGS += QUOTIENT_GOLD;
		$("#pannelGoldEggs").html(printNB(Math.floor(GOLD_EGGS)));
	}, 1000);
}

// FONCTION QUI LANCE UN RANDOM (SUR 1000) CHAQUE SECONDE POUR AFFICHER OU NON L'OEUF MAGIQUE
function doMagicLuck() {
	setInterval(function() {
		var random;

		if (LOCK_COMBAT == 1 || PAUSE == 1) return ;
		if (LOCK_MAGIC == 0) {
			random = Math.floor((Math.random() * 1000) + 1);
			if (random > (1000 - BOOST_LUCK)) {
				var top = 0;
				var left = 0;

				LOCK_MAGIC = 1;
				while (top == 0) {
					top = Math.floor((Math.random() * ($(document).height() - 93)));
					if (top < 0) top = 0;
				}
				while (left == 0) {
					left = Math.floor((Math.random() * ($(document).width() - 75)));
					if (left < 0) left = 0;
				}
				$('#magicEgg').css('top', top + 'px');
				$('#magicEgg').css('left', left + 'px');
				$('#magicEggClick').css('top', top + 'px');
				$('#magicEggClick').css('left', left + 'px');
				$('#magicEggClick').show(0);
				$("#magicEgg").fadeIn(MAGIC_TIMEOUT * 1000, "linear", function() {
					$("#magicEgg").hide(0);
					$("#magicEggClick").hide(0);
					LOCK_MAGIC = 0;
				});
			}
		}
	}, 1000);
}

// GERE LA REGENERATION DES HP DU HERO
function doRegen() {
	setInterval(function () {
		if (LOCK_COMBAT == 1) return ;
		if (HERO_HP < HERO_HP_MAX) HERO_HP += REGEN_HP;
		if (HERO_HP > HERO_HP_MAX) HERO_HP = HERO_HP_MAX;
		$("#info-hp").html(HERO_HP + '');
	}, 1000);
}

// FONCTION QUI CHARGE UN TABLEAU D'IMAGES
function preload(arrayOfImages) {
	$(arrayOfImages).each(function () {
		$('<img />').attr('src', this).appendTo('body').css('display','none');
	});
}

// LANCEMENT AU DEMARRAGE
$(document).ready(function(){ 
	$(function() {
		var y = 1;
		var x;

		// ON INITIALISE LES TABLEAUX
		initShop();
		initEnnemies();

		// ON AJOUTE LES PREMIERS BLOCKS
		addFirstBlocks();

		// ON AFFICHE LES INFOS QUI CORRESPONDENT
		UpdateInfos();
		$("#prix-area").html('' + Math.floor(PRICE_AREA));
		$("#prix-potion").html('' + Math.floor(PRICE_POTION));

		// ON INITIALISE LES BOUTONS CORRECTEMENT
		if (MAGIC_EGGS <= 0) { $('#booster').toggleClass("buttonON buttonOFF"); }
		else $('#boostLoagingInside').css("width", "100%");

		// LES ELEMENTS DE CLASS : `NOTDRAGGABLE` NE SONT PAS DRAGGABLE
		$('.notDraggable').on('dragstart', function(event) { event.preventDefault(); });

		// ON CHARGE LES IMAGES HORS DU HTML (ET ON RECUPERE LEURS TAILLES)
		$({}).imageLoader({
			images: IMAGES_TO_LOAD,
			async: true,
			error: function(e, ui) {
				var i = ( ui.i + 1 );
				alert("L' image "+i+ " est introuvable, verifiez le lien : " + ui.data[ui.i].src);

			},
			allcomplete: function(e, ui) {
				$(document.body).css('display', 'block');	// TOUT EST CHARGER, ON AFFICHE LE BODY (A REVOIR !!!)
				getSpriteWidthHeight();
			}
		});

		openPopUp('Choix du h&eacute;ro', 900, 700, $("#heroSelect").html());
		selectHero(1);

		IntervalUpdateEggs();		// AJOUTE LES OEUFS A INTERVAL REGULIER
		IntervalUpdateGoldEggs();	// AJOUTE LES OEUFS D'OR A INTERVAL REGULIER
		changeTitle();				// CHANGE LE TITRE DE LA PAGE A INTERVAL REGULIER
		doChrono();					// COMPTE LE PLAYTIME A INTERVAL REGULIER
		updateShopBuyable();		// MET A JOUR LES ELEMENTS ACHETABLES A INTERVAL REGULIER
		doAura();					// FAIS TOURNER L'AURA DE 360 DEGRES A INTERVAL REGULIER
		doRegen();					// REGENERE LES HP DU HERO A INTERVAL REGULIER
		doMagicLuck();				// FAIRE APPARAITRE OU NON OEUF MAGIQUE A INTERVAL REGULIER
		doFightLoop();				// LANCE LE DECOMPTE DU PREMIER COMBAT
	});
});
