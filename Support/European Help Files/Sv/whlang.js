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
garrSortChar[66] = 144;
garrSortChar[67] = 146;
garrSortChar[68] = 150;
garrSortChar[69] = 154;
garrSortChar[70] = 164;
garrSortChar[71] = 167;
garrSortChar[72] = 169;
garrSortChar[73] = 171;
garrSortChar[74] = 181;
garrSortChar[75] = 183;
garrSortChar[76] = 185;
garrSortChar[77] = 187;
garrSortChar[78] = 189;
garrSortChar[79] = 193;
garrSortChar[80] = 206;
garrSortChar[81] = 208;
garrSortChar[82] = 210;
garrSortChar[83] = 212;
garrSortChar[84] = 217;
garrSortChar[85] = 222;
garrSortChar[86] = 230;
garrSortChar[87] = 232;
garrSortChar[88] = 234;
garrSortChar[89] = 236;
garrSortChar[90] = 244;
garrSortChar[91] = 61;
garrSortChar[92] = 62;
garrSortChar[93] = 63;
garrSortChar[94] = 64;
garrSortChar[95] = 66;
garrSortChar[96] = 67;
garrSortChar[97] = 131;
garrSortChar[98] = 144;
garrSortChar[99] = 146;
garrSortChar[100] = 150;
garrSortChar[101] = 154;
garrSortChar[102] = 164;
garrSortChar[103] = 167;
garrSortChar[104] = 169;
garrSortChar[105] = 171;
garrSortChar[106] = 181;
garrSortChar[107] = 183;
garrSortChar[108] = 185;
garrSortChar[109] = 187;
garrSortChar[110] = 189;
garrSortChar[111] = 193;
garrSortChar[112] = 206;
garrSortChar[113] = 208;
garrSortChar[114] = 210;
garrSortChar[115] = 212;
garrSortChar[116] = 217;
garrSortChar[117] = 222;
garrSortChar[118] = 230;
garrSortChar[119] = 232;
garrSortChar[120] = 234;
garrSortChar[121] = 236;
garrSortChar[122] = 244;
garrSortChar[123] = 68;
garrSortChar[124] = 69;
garrSortChar[125] = 70;
garrSortChar[126] = 71;
garrSortChar[127] = 27;
garrSortChar[128] = 114;
garrSortChar[129] = 28;
garrSortChar[130] = 82;
garrSortChar[131] = 166;
garrSortChar[132] = 85;
garrSortChar[133] = 112;
garrSortChar[134] = 109;
garrSortChar[135] = 110;
garrSortChar[136] = 65;
garrSortChar[137] = 113;
garrSortChar[138] = 215;
garrSortChar[139] = 86;
garrSortChar[140] = 205;
garrSortChar[141] = 29;
garrSortChar[142] = 247;
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
garrSortChar[153] = 221;
garrSortChar[154] = 214;
garrSortChar[155] = 87;
garrSortChar[156] = 204;
garrSortChar[157] = 32;
garrSortChar[158] = 246;
garrSortChar[159] = 241;
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
garrSortChar[186] = 195;
garrSortChar[187] = 94;
garrSortChar[188] = 116;
garrSortChar[189] = 117;
garrSortChar[190] = 118;
garrSortChar[191] = 78;
garrSortChar[192] = 131;
garrSortChar[193] = 131;
garrSortChar[194] = 131;
garrSortChar[195] = 131;
garrSortChar[196] = 250;
garrSortChar[197] = 248;
garrSortChar[198] = 131;
garrSortChar[199] = 146;
garrSortChar[200] = 154;
garrSortChar[201] = 154;
garrSortChar[202] = 154;
garrSortChar[203] = 154;
garrSortChar[204] = 171;
garrSortChar[205] = 171;
garrSortChar[206] = 171;
garrSortChar[207] = 171;
garrSortChar[208] = 150;
garrSortChar[209] = 189;
garrSortChar[210] = 193;
garrSortChar[211] = 193;
garrSortChar[212] = 193;
garrSortChar[213] = 193;
garrSortChar[214] = 252;
garrSortChar[215] = 95;
garrSortChar[216] = 193;
garrSortChar[217] = 222;
garrSortChar[218] = 222;
garrSortChar[219] = 222;
garrSortChar[220] = 222;
garrSortChar[221] = 236;
garrSortChar[222] = 220;
garrSortChar[223] = 216;
garrSortChar[224] = 131;
garrSortChar[225] = 131;
garrSortChar[226] = 131;
garrSortChar[227] = 131;
garrSortChar[228] = 250;
garrSortChar[229] = 248;
garrSortChar[230] = 131;
garrSortChar[231] = 146;
garrSortChar[232] = 154;
garrSortChar[233] = 154;
garrSortChar[234] = 154;
garrSortChar[235] = 154;
garrSortChar[236] = 171;
garrSortChar[237] = 171;
garrSortChar[238] = 171;
garrSortChar[239] = 171;
garrSortChar[240] = 150;
garrSortChar[241] = 189;
garrSortChar[242] = 193;
garrSortChar[243] = 193;
garrSortChar[244] = 193;
garrSortChar[245] = 193;
garrSortChar[246] = 252;
garrSortChar[247] = 95;
garrSortChar[248] = 193;
garrSortChar[249] = 222;
garrSortChar[250] = 222;
garrSortChar[251] = 222;
garrSortChar[252] = 222;
garrSortChar[253] = 236;
garrSortChar[254] = 220;
garrSortChar[255] = 216;

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
gaFtsStop[10] = "alla";
gaFtsStop[11] = "ang";
gaFtsStop[12] = "annan";
gaFtsStop[13] = "annat";
gaFtsStop[14] = "antingen";
gaFtsStop[15] = "använd";
gaFtsStop[16] = "använda";
gaFtsStop[17] = "använder";
gaFtsStop[18] = "använt";
gaFtsStop[19] = "att";
gaFtsStop[20] = "av";
gaFtsStop[21] = "behöver";
gaFtsStop[22] = "bland";
gaFtsStop[23] = "de";
gaFtsStop[24] = "dem";
gaFtsStop[25] = "den";
gaFtsStop[26] = "deras";
gaFtsStop[27] = "dessa";
gaFtsStop[28] = "det";
gaFtsStop[29] = "detta";
gaFtsStop[30] = "din";
gaFtsStop[31] = "dina";
gaFtsStop[32] = "ditt";
gaFtsStop[33] = "du";
gaFtsStop[34] = "där";
gaFtsStop[35] = "efter";
gaFtsStop[36] = "eftersom";
gaFtsStop[37] = "eller";
gaFtsStop[38] = "en";
gaFtsStop[39] = "era";
gaFtsStop[40] = "ert";
gaFtsStop[41] = "ett";
gaFtsStop[42] = "från";
gaFtsStop[43] = "för";
gaFtsStop[44] = "gjord";
gaFtsStop[45] = "gjort";
gaFtsStop[46] = "gör";
gaFtsStop[47] = "göra";
gaFtsStop[48] = "har";
gaFtsStop[49] = "hellre";
gaFtsStop[50] = "hur";
gaFtsStop[51] = "hämta";
gaFtsStop[52] = "här";
gaFtsStop[53] = "i";
gaFtsStop[54] = "ingen";
gaFtsStop[55] = "inget";
gaFtsStop[56] = "inom";
gaFtsStop[57] = "inte";
gaFtsStop[58] = "jag";
gaFtsStop[59] = "Jag";
gaFtsStop[60] = "kan";
gaFtsStop[61] = "kanske";
gaFtsStop[62] = "längs";
gaFtsStop[63] = "med";
gaFtsStop[64] = "mellan";
gaFtsStop[65] = "men";
gaFtsStop[66] = "mer";
gaFtsStop[67] = "måste";
gaFtsStop[68] = "ni";
gaFtsStop[69] = "någon";
gaFtsStop[70] = "något";
gaFtsStop[71] = "några";
gaFtsStop[72] = "när";
gaFtsStop[73] = "och";
gaFtsStop[74] = "ok";
gaFtsStop[75] = "okej";
gaFtsStop[76] = "om";
gaFtsStop[77] = "på";
gaFtsStop[78] = "redan";
gaFtsStop[79] = "samma";
gaFtsStop[80] = "se";
gaFtsStop[81] = "sedan";
gaFtsStop[82] = "som";
gaFtsStop[83] = "så";
gaFtsStop[84] = "sådan";
gaFtsStop[85] = "sådant";
gaFtsStop[86] = "sätt";
gaFtsStop[87] = "utan";
gaFtsStop[88] = "vad";
gaFtsStop[89] = "var";
gaFtsStop[90] = "vara";
gaFtsStop[91] = "varit";
gaFtsStop[92] = "varje";
gaFtsStop[93] = "vi";
gaFtsStop[94] = "vill";
gaFtsStop[95] = "väg";
gaFtsStop[96] = "än";
gaFtsStop[97] = "ändå";
gaFtsStop[98] = "är";
gaFtsStop[99] = "även";



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