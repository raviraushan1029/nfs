//	WebHelp 5.10.001
var garrSortChar=new Array();
var gaFtsStop=new Array();
var gaFtsStem=new Array();
var gbWhLang=false;

garrSortChar[0] = 0;
garrSortChar[1] = 1;
garrSortChar[2] = 2;
garrSortChar[3] = 3;
garrSortChar[4] = 4;
garrSortChar[5] = 5;
garrSortChar[6] = 6;
garrSortChar[7] = 7;
garrSortChar[8] = 8;
garrSortChar[9] = 40;
garrSortChar[10] = 41;
garrSortChar[11] = 42;
garrSortChar[12] = 43;
garrSortChar[13] = 44;
garrSortChar[14] = 9;
garrSortChar[15] = 10;
garrSortChar[16] = 11;
garrSortChar[17] = 12;
garrSortChar[18] = 13;
garrSortChar[19] = 14;
garrSortChar[20] = 15;
garrSortChar[21] = 16;
garrSortChar[22] = 17;
garrSortChar[23] = 18;
garrSortChar[24] = 19;
garrSortChar[25] = 20;
garrSortChar[26] = 21;
garrSortChar[27] = 22;
garrSortChar[28] = 23;
garrSortChar[29] = 24;
garrSortChar[30] = 25;
garrSortChar[31] = 26;
garrSortChar[32] = 38;
garrSortChar[33] = 45;
garrSortChar[34] = 46;
garrSortChar[35] = 47;
garrSortChar[36] = 48;
garrSortChar[37] = 49;
garrSortChar[38] = 50;
garrSortChar[39] = 33;
garrSortChar[40] = 51;
garrSortChar[41] = 52;
garrSortChar[42] = 53;
garrSortChar[43] = 88;
garrSortChar[44] = 54;
garrSortChar[45] = 34;
garrSortChar[46] = 55;
garrSortChar[47] = 56;
garrSortChar[48] = 115;
garrSortChar[49] = 119;
garrSortChar[50] = 121;
garrSortChar[51] = 123;
garrSortChar[52] = 125;
garrSortChar[53] = 126;
garrSortChar[54] = 127;
garrSortChar[55] = 128;
garrSortChar[56] = 129;
garrSortChar[57] = 130;
garrSortChar[58] = 57;
garrSortChar[59] = 58;
garrSortChar[60] = 89;
garrSortChar[61] = 90;
garrSortChar[62] = 91;
garrSortChar[63] = 59;
garrSortChar[64] = 60;
garrSortChar[65] = 131;
garrSortChar[66] = 142;
garrSortChar[67] = 144;
garrSortChar[68] = 148;
garrSortChar[69] = 152;
garrSortChar[70] = 162;
garrSortChar[71] = 165;
garrSortChar[72] = 167;
garrSortChar[73] = 169;
garrSortChar[74] = 179;
garrSortChar[75] = 181;
garrSortChar[76] = 183;
garrSortChar[77] = 185;
garrSortChar[78] = 187;
garrSortChar[79] = 191;
garrSortChar[80] = 204;
garrSortChar[81] = 206;
garrSortChar[82] = 208;
garrSortChar[83] = 210;
garrSortChar[84] = 215;
garrSortChar[85] = 220;
garrSortChar[86] = 228;
garrSortChar[87] = 230;
garrSortChar[88] = 232;
garrSortChar[89] = 234;
garrSortChar[90] = 242;
garrSortChar[91] = 61;
garrSortChar[92] = 62;
garrSortChar[93] = 63;
garrSortChar[94] = 64;
garrSortChar[95] = 66;
garrSortChar[96] = 67;
garrSortChar[97] = 131;
garrSortChar[98] = 142;
garrSortChar[99] = 144;
garrSortChar[100] = 148;
garrSortChar[101] = 152;
garrSortChar[102] = 162;
garrSortChar[103] = 165;
garrSortChar[104] = 167;
garrSortChar[105] = 169;
garrSortChar[106] = 179;
garrSortChar[107] = 181;
garrSortChar[108] = 183;
garrSortChar[109] = 185;
garrSortChar[110] = 187;
garrSortChar[111] = 191;
garrSortChar[112] = 204;
garrSortChar[113] = 206;
garrSortChar[114] = 208;
garrSortChar[115] = 210;
garrSortChar[116] = 215;
garrSortChar[117] = 220;
garrSortChar[118] = 228;
garrSortChar[119] = 230;
garrSortChar[120] = 232;
garrSortChar[121] = 234;
garrSortChar[122] = 242;
garrSortChar[123] = 68;
garrSortChar[124] = 69;
garrSortChar[125] = 70;
garrSortChar[126] = 71;
garrSortChar[127] = 27;
garrSortChar[128] = 114;
garrSortChar[129] = 28;
garrSortChar[130] = 82;
garrSortChar[131] = 164;
garrSortChar[132] = 85;
garrSortChar[133] = 112;
garrSortChar[134] = 109;
garrSortChar[135] = 110;
garrSortChar[136] = 65;
garrSortChar[137] = 113;
garrSortChar[138] = 213;
garrSortChar[139] = 86;
garrSortChar[140] = 203;
garrSortChar[141] = 29;
garrSortChar[142] = 245;
garrSortChar[143] = 30;
garrSortChar[144] = 31;
garrSortChar[145] = 80;
garrSortChar[146] = 81;
garrSortChar[147] = 83;
garrSortChar[148] = 84;
garrSortChar[149] = 111;
garrSortChar[150] = 36;
garrSortChar[151] = 37;
garrSortChar[152] = 79;
garrSortChar[153] = 219;
garrSortChar[154] = 212;
garrSortChar[155] = 87;
garrSortChar[156] = 202;
garrSortChar[157] = 32;
garrSortChar[158] = 244;
garrSortChar[159] = 239;
garrSortChar[160] = 39;
garrSortChar[161] = 72;
garrSortChar[162] = 97;
garrSortChar[163] = 98;
garrSortChar[164] = 99;
garrSortChar[165] = 100;
garrSortChar[166] = 73;
garrSortChar[167] = 101;
garrSortChar[168] = 74;
garrSortChar[169] = 102;
garrSortChar[170] = 133;
garrSortChar[171] = 93;
garrSortChar[172] = 103;
garrSortChar[173] = 35;
garrSortChar[174] = 104;
garrSortChar[175] = 75;
garrSortChar[176] = 105;
garrSortChar[177] = 92;
garrSortChar[178] = 122;
garrSortChar[179] = 124;
garrSortChar[180] = 76;
garrSortChar[181] = 106;
garrSortChar[182] = 107;
garrSortChar[183] = 108;
garrSortChar[184] = 77;
garrSortChar[185] = 120;
garrSortChar[186] = 193;
garrSortChar[187] = 94;
garrSortChar[188] = 116;
garrSortChar[189] = 117;
garrSortChar[190] = 118;
garrSortChar[191] = 78;
garrSortChar[192] = 131;
garrSortChar[193] = 131;
garrSortChar[194] = 131;
garrSortChar[195] = 131;
garrSortChar[196] = 131;
garrSortChar[197] = 254;
garrSortChar[198] = 246;
garrSortChar[199] = 144;
garrSortChar[200] = 152;
garrSortChar[201] = 152;
garrSortChar[202] = 152;
garrSortChar[203] = 152;
garrSortChar[204] = 169;
garrSortChar[205] = 169;
garrSortChar[206] = 169;
garrSortChar[207] = 169;
garrSortChar[208] = 148;
garrSortChar[209] = 187;
garrSortChar[210] = 191;
garrSortChar[211] = 191;
garrSortChar[212] = 191;
garrSortChar[213] = 191;
garrSortChar[214] = 191;
garrSortChar[215] = 95;
garrSortChar[216] = 250;
garrSortChar[217] = 220;
garrSortChar[218] = 220;
garrSortChar[219] = 220;
garrSortChar[220] = 220;
garrSortChar[221] = 234;
garrSortChar[222] = 217;
garrSortChar[223] = 214;
garrSortChar[224] = 131;
garrSortChar[225] = 131;
garrSortChar[226] = 131;
garrSortChar[227] = 131;
garrSortChar[228] = 131;
garrSortChar[229] = 254;
garrSortChar[230] = 246;
garrSortChar[231] = 144;
garrSortChar[232] = 152;
garrSortChar[233] = 152;
garrSortChar[234] = 152;
garrSortChar[235] = 152;
garrSortChar[236] = 169;
garrSortChar[237] = 169;
garrSortChar[238] = 169;
garrSortChar[239] = 169;
garrSortChar[240] = 148;
garrSortChar[241] = 187;
garrSortChar[242] = 191;
garrSortChar[243] = 191;
garrSortChar[244] = 191;
garrSortChar[245] = 191;
garrSortChar[246] = 191;
garrSortChar[247] = 96;
garrSortChar[248] = 250;
garrSortChar[249] = 220;
garrSortChar[250] = 220;
garrSortChar[251] = 220;
garrSortChar[252] = 220;
garrSortChar[253] = 234;
garrSortChar[254] = 217;
garrSortChar[255] = 238;

gaFtsStop[0] = "0";
gaFtsStop[1] = "1";
gaFtsStop[2] = "2";
gaFtsStop[3] = "3";
gaFtsStop[4] = "4";
gaFtsStop[5] = "5";
gaFtsStop[6] = "6";
gaFtsStop[7] = "7";
gaFtsStop[8] = "8";
gaFtsStop[9] = "9";
gaFtsStop[10] = "af";
gaFtsStop[11] = "alle";
gaFtsStop[12] = "allerede";
gaFtsStop[13] = "anden";
gaFtsStop[14] = "andet";
gaFtsStop[15] = "behov";
gaFtsStop[16] = "beh�ve";
gaFtsStop[17] = "beh�veenhver";
gaFtsStop[18] = "blandt";
gaFtsStop[19] = "brug";
gaFtsStop[20] = "bruge";
gaFtsStop[21] = "brugt";
gaFtsStop[22] = "de";
gaFtsStop[23] = "dem";
gaFtsStop[24] = "den";
gaFtsStop[25] = "denne";
gaFtsStop[26] = "der";
gaFtsStop[27] = "deres";
gaFtsStop[28] = "dern�st";
gaFtsStop[29] = "det";
gaFtsStop[30] = "dette";
gaFtsStop[31] = "din";
gaFtsStop[32] = "dine";
gaFtsStop[33] = "disse";
gaFtsStop[34] = "dit";
gaFtsStop[35] = "dog";
gaFtsStop[36] = "du";
gaFtsStop[37] = "efter";
gaFtsStop[38] = "eller";
gaFtsStop[39] = "en";
gaFtsStop[40] = "end";
gaFtsStop[41] = "endnu";
gaFtsStop[42] = "enhver";
gaFtsStop[43] = "enten";
gaFtsStop[44] = "er";
gaFtsStop[45] = "et";
gaFtsStop[46] = "for";
gaFtsStop[47] = "fordi";
gaFtsStop[48] = "fra";
gaFtsStop[49] = "f�rdig";
gaFtsStop[50] = "f�";
gaFtsStop[51] = "gjort";
gaFtsStop[52] = "g�r";
gaFtsStop[53] = "g�re";
gaFtsStop[54] = "har";
gaFtsStop[55] = "her";
gaFtsStop[56] = "hvad";
gaFtsStop[57] = "hver";
gaFtsStop[58] = "hvilken";
gaFtsStop[59] = "hvis";
gaFtsStop[60] = "hvor";
gaFtsStop[61] = "hvordan";
gaFtsStop[62] = "hvorn�r";
gaFtsStop[63] = "ikke";
gaFtsStop[64] = "ind";
gaFtsStop[65] = "ingen";
gaFtsStop[66] = "intet";
gaFtsStop[67] = "jeg";
gaFtsStop[68] = "kan";
gaFtsStop[69] = "langs";
gaFtsStop[70] = "ligesom";
gaFtsStop[71] = "man";
gaFtsStop[72] = "med";
gaFtsStop[73] = "mellem";
gaFtsStop[74] = "men";
gaFtsStop[75] = "mere";
gaFtsStop[76] = "m�";
gaFtsStop[77] = "m�de";
gaFtsStop[78] = "m�ske";
gaFtsStop[79] = "nogle";
gaFtsStop[80] = "n�r";
gaFtsStop[81] = "og";
gaFtsStop[82] = "ogs�";
gaFtsStop[83] = "ok";
gaFtsStop[84] = "okay";
gaFtsStop[85] = "p�";
gaFtsStop[86] = "re";
gaFtsStop[87] = "samme";
gaFtsStop[88] = "se";
gaFtsStop[89] = "snarere";
gaFtsStop[90] = "som";
gaFtsStop[91] = "s�";
gaFtsStop[92] = "s�dan";
gaFtsStop[93] = "tage";
gaFtsStop[94] = "til";
gaFtsStop[95] = "uden";
gaFtsStop[96] = "var";
gaFtsStop[97] = "ved";
gaFtsStop[98] = "vej";
gaFtsStop[99] = "vi";
gaFtsStop[100] = "vil";
gaFtsStop[101] = "v�re";
gaFtsStop[102] = "v�ret";
gaFtsStop[103] = "�nske";



// as javascript 1.3 support unicode instead of ISO-Latin-1
// need to transfer come code back to ISO-Latin-1 for compare purpose
// Note: Different Language(Code page) maybe need different array:
var gaUToC=new Array();
gaUToC[8364]=128;
gaUToC[8218]=130;
gaUToC[402]=131;
gaUToC[8222]=132;
gaUToC[8230]=133;
gaUToC[8224]=134;
gaUToC[8225]=135;
gaUToC[710]=136;
gaUToC[8240]=137;
gaUToC[352]=138;
gaUToC[8249]=139;
gaUToC[338]=140;
gaUToC[381]=142;
gaUToC[8216]=145;
gaUToC[8217]=146;
gaUToC[8220]=147;
gaUToC[8221]=148;
gaUToC[8226]=149;
gaUToC[8211]=150;
gaUToC[8212]=151;
gaUToC[732]=152;
gaUToC[8482]=153;
gaUToC[353]=154;
gaUToC[8250]=155;
gaUToC[339]=156;
gaUToC[382]=158;
gaUToC[376]=159;

var gsBiggestChar="";
function getBiggestChar()
{
	if(gsBiggestChar.length==0)
	{
		if(garrSortChar.length<256)
			gsBiggestChar=String.fromCharCode(255);
		else
		{
			var nBiggest=0;
			var nBigChar=0;
			for(var i=0;i<=255;i++)
			{
				if(garrSortChar[i]>nBiggest)
				{
					nBiggest=garrSortChar[i];
					nBigChar=i;
				}
			}
			gsBiggestChar=String.fromCharCode(nBigChar);
		}

	}	
	return gsBiggestChar;
}

function getCharCode(str,i)
{
	var code=str.charCodeAt(i)
	if(code>256)
	{
		code=gaUToC[code];
	}
	return code;
}

function compare(strText1,strText2)
{
	if(garrSortChar.length<256)
	{
		var strt1=strText1.toLowerCase();
		var strt2=strText2.toLowerCase();
		if(strt1<strt2) return -1;
		if(strt1>strt2) return 1;
		return 0;
	}
	else
	{
		for(var i=0;i<strText1.length&&i<strText2.length;i++)
		{
			if(garrSortChar[getCharCode(strText1,i)]<garrSortChar[getCharCode(strText2,i)]) return -1;
			if(garrSortChar[getCharCode(strText1,i)]>garrSortChar[getCharCode(strText2,i)]) return 1;
		}
		if(strText1.length<strText2.length) return -1;
		if(strText1.length>strText2.length) return 1;
		return 0;
	}
}
gbWhLang=true;