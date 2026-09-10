// Base de datos con tus invitados reales
const invitadosDB = [
  { id: "1", nombre: "CAROLA GOMEZ", mesaNumero: 1 },
  { id: "2", nombre: "SILVIA FLORES", mesaNumero: 1 },
  { id: "3", nombre: "DAVID DI LULLO", mesaNumero: 1 },
  { id: "4", nombre: "LUCIANA FLORES", mesaNumero: 1 },
  { id: "5", nombre: "SANTIAGO CORBALAN", mesaNumero: 1 },
  { id: "6", nombre: "EZEQUIEL AGUIRRE", mesaNumero: 1 },
  { id: "7", nombre: "SONIA ZAMORANO", mesaNumero: 1 },
  { id: "8", nombre: "DARIO CORONEL", mesaNumero: 1 },
  { id: "9", nombre: "GLORIA CRUZ", mesaNumero: 1 },
  { id: "10", nombre: "LUIS MOYANO", mesaNumero: 1 },
  { id: "11", nombre: "RUBEN BAZAN", mesaNumero: 1 },
    { id: "12", nombre: "MARIA INES MEDINA", mesaNumero: 2 },
  { id: "13", nombre: "MARIA TERESITA PISCOLICHE", mesaNumero: 2 },
  { id: "14", nombre: "CECILIA ROLDAN", mesaNumero: 2 },
  { id: "15", nombre: "VANESA LAZARTE", mesaNumero: 2 },
  { id: "16", nombre: "MARICEL TORO", mesaNumero: 2 },
  { id: "17", nombre: "LUIS BARRIONUEVO", mesaNumero: 2 },
  { id: "18", nombre: "JOSE MEDINA", mesaNumero: 2 },
  { id: "19", nombre: "MIRIAN LIZARRAGA", mesaNumero: 2 },
  { id: "20", nombre: "EMILIO NAMEN", mesaNumero: 2 },
  { id: "21", nombre: "VEGA JORGE", mesaNumero: 2 },
  { id: "22", nombre: "FLORENCIA VALLEJO", mesaNumero: 2 },
  { id: "23", nombre: "LUCIA MEDINA", mesaNumero: 3 },
  { id: "24", nombre: "SILVANA REINOSO", mesaNumero: 3 },
  { id: "25", nombre: "GASTON GALLARDO", mesaNumero: 3 },
  { id: "26", nombre: "MILAGRO RIVADENEIRA", mesaNumero: 3 },
  { id: "27", nombre: "CLAUDIA VALENZUELA", mesaNumero: 3 },
  { id: "28", nombre: "GERONIMO BRITOS", mesaNumero: 3 },
  { id: "29", nombre: "CAMPERO SILVIA", mesaNumero: 3 },
  { id: "30", nombre: "LINA GRAMAJO", mesaNumero: 3 },
  { id: "31", nombre: "MARIA CECILIA SALAZAR", mesaNumero: 3 },
  { id: "32", nombre: "PEDRO OROSCO", mesaNumero: 3 },
  { id: "33", nombre: "MARIANA GRAMAJO", mesaNumero: 3 },
  { id: "34", nombre: "CECILIA VALDEZ", mesaNumero: 4 },
  { id: "35", nombre: "TOSCANO RICARDO", mesaNumero: 4 },
  { id: "36", nombre: "ELI ROMANO", mesaNumero: 4 },
  { id: "37", nombre: "GABRIELA PIZ DA SILVA", mesaNumero: 4 },
  { id: "38", nombre: "MARIA LAURA PAIZ DA SILVA", mesaNumero: 4 },
  { id: "39", nombre: "ELIZABETH PAIZ DA SILVA", mesaNumero: 4 },
  { id: "40", nombre: "SOFIA PAIZ DA SILVA", mesaNumero: 4 },
  { id: "41", nombre: "VIVIANA RUIZ", mesaNumero: 4 },
  { id: "42", nombre: "MONICA NAVARRO", mesaNumero: 4 },
  { id: "43", nombre: "LORENA BARROS", mesaNumero: 4 },
  { id: "44", nombre: "JESUS ASAD", mesaNumero: 4 },
  { id: "45", nombre: "GUDELIA DOMINGUEZ", mesaNumero: 5 },
  { id: "46", nombre: "ROCIO ACOSTA", mesaNumero: 5 },
  { id: "47", nombre: "CARLOS CISNEROS", mesaNumero: 5 },
  { id: "48", nombre: "SONIA FLORES", mesaNumero: 5 },
  { id: "49", nombre: "SERGIO FLORES", mesaNumero: 5 },
  { id: "50", nombre: "LUZ MEDINA", mesaNumero: 5 },
  { id: "51", nombre: "JOEL MEDINA", mesaNumero: 5 },
  { id: "52", nombre: "MARIA NATALIA CISNEROS", mesaNumero: 5 },
  { id: "53", nombre: "SERGIO FREITES", mesaNumero: 5 },
  { id: "54", nombre: "CLAUDIA GONZALES", mesaNumero: 5 },
  { id: "55", nombre: "JUAN PABLO ZARATE", mesaNumero: 5 },
  { id: "56", nombre: "AGUILAR TERESA", mesaNumero: 6 },
  { id: "57", nombre: "CORONEL GABRIELA", mesaNumero: 6 },
  { id: "58", nombre: "CHAVARRIA SILVIA", mesaNumero: 6 },
  { id: "59", nombre: "ESCOBAR MABEL", mesaNumero: 6 },
  { id: "60", nombre: "FLORES JUAN JOSE", mesaNumero: 6 },
  { id: "61", nombre: "LAZARTE VALERIA", mesaNumero: 6 },
  { id: "62", nombre: "LOPEZ MICAELA", mesaNumero: 6 },
  { id: "63", nombre: "LOPEZ LOURDES SOFIA", mesaNumero: 6 },
  { id: "64", nombre: "QUINTEROS RAMIRO", mesaNumero: 6 },
  { id: "65", nombre: "ROJAS ANALIA", mesaNumero: 6 },
  { id: "66", nombre: "TARTALO NANCI", mesaNumero: 6 },
  { id: "67", nombre: "ROMANO SELVA", mesaNumero: 7 },
  { id: "68", nombre: "LOPEZ OSCAR EDUARDO", mesaNumero: 7 },
  { id: "69", nombre: "PATRICIA UREÑA", mesaNumero: 7 },
  { id: "70", nombre: "ANDREA", mesaNumero: 7 },
  { id: "71", nombre: "MARTA RIVERO", mesaNumero: 7 },
  { id: "72", nombre: "MARCELO MOLINA", mesaNumero: 7 },
  { id: "73", nombre: "CAROLINA LIZARRAGA", mesaNumero: 7 },
  { id: "74", nombre: "MICAELA GOMEZ", mesaNumero: 7 },
  { id: "75", nombre: "MELISA VALDEZ", mesaNumero: 7 },
  { id: "76", nombre: "BELEN ZAPATA", mesaNumero: 7 },
  { id: "77", nombre: "SABRINA FLORES", mesaNumero: 7 },
  { id: "78", nombre: "SOLEDAD CORREA", mesaNumero: 8 },
  { id: "79", nombre: "ALVARO DUBRENILK", mesaNumero: 8 },
  { id: "80", nombre: "LUCIANA CORREA", mesaNumero: 8 },
  { id: "81", nombre: "ALVARO TRIMARCO", mesaNumero: 8 },
  { id: "82", nombre: "NADIA MEDINA", mesaNumero: 8 },
  { id: "83", nombre: "JOSE PAZ", mesaNumero: 8 },
  { id: "84", nombre: "LUISA FERNANDEZ", mesaNumero: 8 },
  { id: "85", nombre: "ESPOSO DE LUISA F.", mesaNumero: 8 },
  { id: "86", nombre: "MARTIN REYES", mesaNumero: 8 },
  { id: "87", nombre: "GISEL GRAMAJO", mesaNumero: 8 },
  { id: "88", nombre: "ANDREA RUIZ", mesaNumero: 8 },
  { id: "89", nombre: "ESTEFANIA CRUZ", mesaNumero: 9 },
  { id: "90", nombre: "MABEL NUÑEZ", mesaNumero: 9 },
  { id: "91", nombre: "NANCY NUÑEZ", mesaNumero: 9 },
  { id: "92", nombre: "SUAREZ CELESTE", mesaNumero: 9 },
  { id: "93", nombre: "PATRICIA ZAYAS", mesaNumero: 9 },
  { id: "94", nombre: "YAMILA GOMEZ", mesaNumero: 9 },
  { id: "95", nombre: "MABEL CORREA", mesaNumero: 9 },
  { id: "96", nombre: "DANIEL AGUIRRE", mesaNumero: 9 },
  { id: "97", nombre: "MARIA MEDINA", mesaNumero: 9 },
  { id: "98", nombre: "VICTORIA DELGADO", mesaNumero: 9 },
  { id: "99", nombre: "SOFIA VAZQUEZ", mesaNumero: 10 },
  { id: "100", nombre: "ANTONIA SANDOVAL", mesaNumero: 10 },
  { id: "101", nombre: "BEATRIZ VAZQUEZ", mesaNumero: 10 },
  { id: "102", nombre: "ROBERTO PALIZA", mesaNumero: 10 },
  { id: "103", nombre: "DOMINGO RODRIGUEZ", mesaNumero: 10 },
  { id: "104", nombre: "IRMA VACA", mesaNumero: 10 },
  { id: "105", nombre: "EDUARDO ALMARAZ", mesaNumero: 10 },
  { id: "106", nombre: "CLAUDIA GUTIERREZ", mesaNumero: 10 },
  { id: "107", nombre: "ANALIA GUTIERREZ", mesaNumero: 10 },
  { id: "108", nombre: "PAULA GUZMAN", mesaNumero: 10 },
  { id: "109", nombre: "ADRIANA VAZQUEZ", mesaNumero: 11 },
  { id: "110", nombre: "MIRTA LOPEZ", mesaNumero: 11 },
  { id: "111", nombre: "NORMA SANCHEZ", mesaNumero: 11 },
  { id: "112", nombre: "DELFINA AYALA", mesaNumero: 11 },
  { id: "113", nombre: "PAMELA ROLDAN", mesaNumero: 11 },
  { id: "114", nombre: "FERNANDA ROLDAN", mesaNumero: 11 },
  { id: "115", nombre: "SEBASTIAN MORALES", mesaNumero: 11 },
  { id: "116", nombre: "MARTA CARRIZO", mesaNumero: 11 },
  { id: "117", nombre: "GABRIELA ALVAREZ", mesaNumero: 11 },
  { id: "118", nombre: "IRIS MORAN", mesaNumero: 11 },
  { id: "119", nombre: "SILVIA BARRIENTOS", mesaNumero: 12 },
  { id: "120", nombre: "DELIA JUAREZ", mesaNumero: 12 },
  { id: "121", nombre: "ATILIO ABRAHAM", mesaNumero: 12 },
  { id: "122", nombre: "MARIA JOSE PEREZ", mesaNumero: 12 },
  { id: "123", nombre: "LORENA VILLAFAÑE", mesaNumero: 12 },
  { id: "124", nombre: "JOSE MARIA SAAVEDRA", mesaNumero: 12 },
  { id: "125", nombre: "JIMENA FIGUEROA", mesaNumero: 12 },
  { id: "126", nombre: "GUSTAVO MOYANO", mesaNumero: 12 },
  { id: "127", nombre: "NORMA FRIAS", mesaNumero: 12 },
  { id: "128", nombre: "MARCELA FERNANDEZ", mesaNumero: 12 },
  { id: "129", nombre: "SILVINA MOREY", mesaNumero: 13 },
  { id: "130", nombre: "SERGIO ARANDA", mesaNumero: 13 },
  { id: "131", nombre: "DANIEL OROSCO", mesaNumero: 13 },
  { id: "132", nombre: "MANUEL BENITE", mesaNumero: 13 },
  { id: "133", nombre: "ALVARO DECIMA", mesaNumero: 13 },
  { id: "134", nombre: "ENZO ACUÑA", mesaNumero: 13 },
  { id: "135", nombre: "LEONEL QUESADA", mesaNumero: 13 },
  { id: "136", nombre: "DANIEL PEREYRA", mesaNumero: 13 },
  { id: "137", nombre: "ROMINA BATLE", mesaNumero: 13 },
  { id: "138", nombre: "CAMPERO DARIO", mesaNumero: 13 },
  { id: "139", nombre: "CAMILA GONZALEZ", mesaNumero: 13 },
  { id: "140", nombre: "LEANDRO VILLAGRA", mesaNumero: 14 },
  { id: "141", nombre: "GOMEZ AZUCENA", mesaNumero: 14 },
  { id: "142", nombre: "ANDRES CORDOBA", mesaNumero: 14 },
  { id: "143", nombre: "SILVIA IBANEZ", mesaNumero: 14 },
  { id: "144", nombre: "DENIS RODRIGUEZ", mesaNumero: 14 },
  { id: "145", nombre: "SONIA RIVERO", mesaNumero: 14 },
  { id: "146", nombre: "LAURA PEREZ", mesaNumero: 14 },
  { id: "147", nombre: "PAMELA VILLAGRA", mesaNumero: 14 },
  { id: "148", nombre: "CECILIA RUIZ", mesaNumero: 14 },
  { id: "149", nombre: "SUPERVISORA SECUNDARIO", mesaNumero: 14 },
  { id: "150", nombre: "SOLEDAD GUZMAN", mesaNumero: 15 },
  { id: "151", nombre: "FERNANDA OSORES", mesaNumero: 15 },
  { id: "152", nombre: "ROCIO MOREY", mesaNumero: 15 },
  { id: "153", nombre: "SOLEDAD OSORES", mesaNumero: 15 },
  { id: "154", nombre: "LORENA MENORQUE", mesaNumero: 15 },
  { id: "155", nombre: "LUZ CORBALAN", mesaNumero: 15 },
  { id: "156", nombre: "CECILIA MELIAN", mesaNumero: 15 },
  { id: "157", nombre: "NATALIA VEGA", mesaNumero: 15 },
  { id: "158", nombre: "JULIO PIZARRO", mesaNumero: 15 },
  { id: "159", nombre: "DANIELA GUZMAN", mesaNumero: 15 },
  { id: "160", nombre: "VICTOR MERCADO", mesaNumero: 15 },
  { id: "161", nombre: "LUCIANO HERRERA", mesaNumero: 16 },
  { id: "162", nombre: "NOELIA GUZMAN", mesaNumero: 16 },
  { id: "163", nombre: "JOSE ALBERTO DE LA VEGA", mesaNumero: 16 },
  { id: "164", nombre: "VALERIA ROSALES", mesaNumero: 16 },
  { id: "165", nombre: "FERNANDO ABRAHAM", mesaNumero: 16 },
  { id: "166", nombre: "KATERINE NAVARRO", mesaNumero: 16 },
  { id: "167", nombre: "NICOLAS AGUIRRE", mesaNumero: 16 },
  { id: "168", nombre: "CAROLINA ALAMINO", mesaNumero: 16 },
  { id: "169", nombre: "CLAUDIA BAZAN", mesaNumero: 16 },
  { id: "170", nombre: "MARCELO AVILA", mesaNumero: 16 },
  { id: "171", nombre: "MARQUEZ SONIA", mesaNumero: 16 },
  { id: "172", nombre: "CAMPOS DARIO", mesaNumero: 17 },
  { id: "173", nombre: "VIVIANA VILLALOBO", mesaNumero: 17 },
  { id: "174", nombre: "NOELIA MENDEZ", mesaNumero: 17 },
  { id: "175", nombre: "CECILIA MORENO", mesaNumero: 17 },
  { id: "176", nombre: "JOSE ROJAS", mesaNumero: 17 },
  { id: "177", nombre: "CLAUDIA MORENO", mesaNumero: 17 },
  { id: "178", nombre: "OSCAR SALAS", mesaNumero: 17 },
  { id: "179", nombre: "MABEL LEDEZMA", mesaNumero: 17 },
  { id: "180", nombre: "SANDRA NUÑEZ", mesaNumero: 17 },
  { id: "181", nombre: "JOSEFINA ROLDAN", mesaNumero: 17 },
  { id: "182", nombre: "ANALIA PASTRANA", mesaNumero: 17 },
  { id: "183", nombre: "GUSTAVO GONZALEZ", mesaNumero: 18 },
  { id: "184", nombre: "SONIA FERNANDEZ", mesaNumero: 18 },
  { id: "185", nombre: "NANCY CARABAJAL", mesaNumero: 18 },
  { id: "186", nombre: "SILVIA VERA", mesaNumero: 18 },
  { id: "187", nombre: "ELENA BRUSKI", mesaNumero: 18 },
  { id: "188", nombre: "CESAR JURI", mesaNumero: 18 },
  { id: "189", nombre: "ACOSTA CARMEN", mesaNumero: 18 },
  { id: "190", nombre: "ACOSTA MARIA DEL VALLE", mesaNumero: 18 },
  { id: "191", nombre: "MIGUEL ROMERO", mesaNumero: 18 },
  { id: "192", nombre: "ESPOSA DE MIGUEL ROMERO", mesaNumero: 18 },
  { id: "193", nombre: "ANA BUSTAMANTE", mesaNumero: 19 },
  { id: "194", nombre: "YANINA GRAMAJO", mesaNumero: 19 },
  { id: "195", nombre: "CARLOS PEREYRA", mesaNumero: 19 },
  { id: "196", nombre: "ALEJANDRO SANTILLAN", mesaNumero: 19 },
  { id: "197", nombre: "ELIANA DIAZ", mesaNumero: 19 },
  { id: "198", nombre: "CECILIA SALAZAR", mesaNumero: 19 },
  { id: "199", nombre: "FERNANDA SOTO", mesaNumero: 19 },
  { id: "200", nombre: "JUAN CASTRO", mesaNumero: 19 },
  { id: "201", nombre: "JOHANA LEQUIZAMON", mesaNumero: 19 },
  { id: "202", nombre: "VALERIA RODRIGUEZ", mesaNumero: 19 },
  { id: "203", nombre: "FRANCO VERON", mesaNumero: 19 },
  { id: "204", nombre: "DANIEL GALLO", mesaNumero: 20 },
  { id: "205", nombre: "LEONOR BLANCO", mesaNumero: 20 },
  { id: "206", nombre: "MARCELA PRIETO", mesaNumero: 20 },
  { id: "207", nombre: "MARIA JOSE", mesaNumero: 20 },
  { id: "208", nombre: "PATRICIA MORENO", mesaNumero: 20 },
  { id: "209", nombre: "SARA LIA BARROS", mesaNumero: 20 },
  { id: "210", nombre: "ELIZABETH SALINAS", mesaNumero: 20 },
  { id: "211", nombre: "LILI PAZ", mesaNumero: 20 },
  { id: "212", nombre: "CESAR CABRERA", mesaNumero: 20 },
  { id: "213", nombre: "FRANCISCO NORIEGA", mesaNumero: 20 },
  { id: "214", nombre: "ROBERTA FUSTE", mesaNumero: 21 },
  { id: "215", nombre: "ESTELA M HERRERA", mesaNumero: 21 },
  { id: "216", nombre: "JOSE LUIS AGUIRRE", mesaNumero: 21 },
  { id: "217", nombre: "PABLO VILLALOBO", mesaNumero: 21 },
  { id: "218", nombre: "CONRADO FERREIRA", mesaNumero: 21 },
  { id: "219", nombre: "ROSA DAVID", mesaNumero: 21 },
  { id: "220", nombre: "LAURA HERRERA", mesaNumero: 21 },
  { id: "221", nombre: "NAHIR GARCIA", mesaNumero: 21 },
  { id: "222", nombre: "TANIA FASSIANO", mesaNumero: 21 },
  { id: "223", nombre: "IRENE HAUACHE", mesaNumero: 21 },
  { id: "224", nombre: "BARROS MARIA", mesaNumero: 21 },
  { id: "225", nombre: "ELINA SANCHEZ", mesaNumero: 22 },
  { id: "226", nombre: "RIVERO SOLANA", mesaNumero: 22 },
  { id: "227", nombre: "MARCELA RUEDA", mesaNumero: 22 },
  { id: "228", nombre: "SANDOVAL JOSE", mesaNumero: 22 },
  { id: "229", nombre: "VANESA LESCANO", mesaNumero: 22 },
  { id: "230", nombre: "JORGE MORALES", mesaNumero: 22 },
  { id: "231", nombre: "MELISA VEGA", mesaNumero: 22 },
  { id: "232", nombre: "MARIA ROSA ACOSTA", mesaNumero: 22 },
  { id: "233", nombre: "ANALIA ACOSTA", mesaNumero: 22 },
  { id: "234", nombre: "DANIEL AYALA", mesaNumero: 22 },
  { id: "235", nombre: "CLAUDIA VALENZUELA", mesaNumero: 22 },
  { id: "236", nombre: "FRANCISCO MASEDO", mesaNumero: 23 },
  { id: "237", nombre: "LORENA VISURA", mesaNumero: 23 },
  { id: "238", nombre: "CECILIA VISUARA", mesaNumero: 23 },
  { id: "239", nombre: "NATALIA SALAZAR", mesaNumero: 23 },
  { id: "240", nombre: "FLORENCIA LAZARTE", mesaNumero: 23 },
  { id: "241", nombre: "JUAREZ HUGO FELIPE", mesaNumero: 23 },
  { id: "242", nombre: "MARIA ELIZABETH TEDESCHI", mesaNumero: 23 },
  { id: "243", nombre: "JUAN MANUEL CHAVEZ", mesaNumero: 23 },
  { id: "244", nombre: "CAROLA CARDOZO", mesaNumero: 23 },
  { id: "245", nombre: "LUCIANA MARTINEZ", mesaNumero: 23 },
  { id: "246", nombre: "PATRICIA MANSILLA", mesaNumero: 24 },
  { id: "247", nombre: "GUADALUPE RENGEL", mesaNumero: 24 },
  { id: "248", nombre: "VICTORIA SOSA", mesaNumero: 24 },
  { id: "249", nombre: "ROSA ANSEN", mesaNumero: 24 },
  { id: "250", nombre: "DANIEL DUBRENILH", mesaNumero: 24 },
  { id: "251", nombre: "JUAN BRANDAN", mesaNumero: 24 },
  { id: "252", nombre: "MARIANO VALDEZ", mesaNumero: 24 },
  { id: "253", nombre: "CECILIA OROSCO", mesaNumero: 24 },
  { id: "254", nombre: "PAOLA PERDIGUERO", mesaNumero: 24 },
  { id: "255", nombre: "LORENA GUATERNA", mesaNumero: 24 },
  { id: "256", nombre: "CINTIA ESTRELLA", mesaNumero: 24 },
  { id: "257", nombre: "PATRICIO LEAL", mesaNumero: 25 },
  { id: "258", nombre: "MARCELA", mesaNumero: 25 },
  { id: "259", nombre: "ANDREA SALAS", mesaNumero: 25 },
  { id: "260", nombre: "EXEQUIEL", mesaNumero: 25 },
  { id: "261", nombre: "ALVARO", mesaNumero: 25 },
  { id: "262", nombre: "GABRIELA", mesaNumero: 25 },
  { id: "263", nombre: "FERNANDA DIAZ", mesaNumero: 25 },
  { id: "264", nombre: "CAROLINA TORINO", mesaNumero: 25 },
  { id: "265", nombre: "MARIA LIZARRAGA", mesaNumero: 25 },
  { id: "266", nombre: "MARIA PACHECO", mesaNumero: 25 },
  { id: "267", nombre: "CRISTINA QUINTANA", mesaNumero: 26 },
  { id: "268", nombre: "SUPERVISORA PRIMARIO", mesaNumero: 26 },
  { id: "269", nombre: "VALERIA LUNA", mesaNumero: 26 },
  { id: "270", nombre: "GLADYS MARTINEZ", mesaNumero: 26 },
  { id: "271", nombre: "MARIA REYES", mesaNumero: 26 },
  { id: "272", nombre: "ROCIO VEGA", mesaNumero: 26 },
  { id: "273", nombre: "KARINA MENDOZA", mesaNumero: 26 },
  { id: "274", nombre: "ROMINA MEDINA", mesaNumero: 26 },
  { id: "275", nombre: "CAMILA AMENTA", mesaNumero: 26 },
  { id: "276", nombre: "LEO ACUÑA", mesaNumero: 26 },
  { id: "277", nombre: "LEILA MOALA", mesaNumero: 26 },
  { id: "278", nombre: "GABRIELA LESCANO", mesaNumero: 27 },
  { id: "279", nombre: "BEATRIZ CHAVEZ", mesaNumero: 27 },
  { id: "280", nombre: "ESTER VALDEZ", mesaNumero: 27 },
  { id: "281", nombre: "JUANA HERRERA", mesaNumero: 27 },
  { id: "282", nombre: "JOSEFINA SORAIRE*", mesaNumero: 27 },
  { id: "283", nombre: "KARINA TAPIA", mesaNumero: 27 },
  { id: "284", nombre: "BARON ROMINA", mesaNumero: 27 },
  { id: "285", nombre: "MARCELA QUIROGA", mesaNumero: 27 },
  { id: "286", nombre: "VICTORIA IBAÑEZ", mesaNumero: 27 },
  { id: "287", nombre: "NOELIA SOSA", mesaNumero: 27 },
  { id: "288", nombre: "CINTIA DIAZ", mesaNumero: 27 },
  { id: "289", nombre: "SILVINA GRAMAJO", mesaNumero: 28 },
  { id: "290", nombre: "NADIA CALIVA", mesaNumero: 28 },
  { id: "291", nombre: "FERNNADA RODRIGUEZ", mesaNumero: 28 },
  { id: "292", nombre: "LUCIA LAZARTE", mesaNumero: 28 },
  { id: "293", nombre: "SERRANO GABRIELA", mesaNumero: 28 },
  { id: "294", nombre: "HUERTA LUCIA", mesaNumero: 28 },
  { id: "295", nombre: "OSMAR ROMANO", mesaNumero: 28 },
  { id: "296", nombre: "GRACIELA CORDOBA", mesaNumero: 28 },
  { id: "297", nombre: "YANINA ZEBALLOS", mesaNumero: 28 },
  { id: "298", nombre: "SABRINA ZEBALLOS", mesaNumero: 28 },
  { id: "299", nombre: "EVELIN ZEBALLOS", mesaNumero: 28 },
  { id: "300", nombre: "MABEL BUSTOS", mesaNumero: 29 },
  { id: "301", nombre: "MABEL CORDOBA", mesaNumero: 29 },
  { id: "302", nombre: "ROSA JURI", mesaNumero: 29 },
  { id: "303", nombre: "ROXANA GRAMAJO", mesaNumero: 29 },
  { id: "304", nombre: "ALBERTO SALAZAR", mesaNumero: 29 },
  { id: "305", nombre: "SONIA RIVADENEIRA", mesaNumero: 29 },
  { id: "306", nombre: "MARIELA ARROYOS", mesaNumero: 29 },
  { id: "307", nombre: "LUIS NIEVA", mesaNumero: 29 },
  { id: "308", nombre: "SONIA RODRIGUEZ", mesaNumero: 29 },
  { id: "309", nombre: "MIRIAM RODRIGUEZ", mesaNumero: 29 },
  { id: "310", nombre: "MARIA ELENA DE SALAZAR", mesaNumero: 29 },
  { id: "311", nombre: "CARLOS GHZANIA", mesaNumero: 30 },
  { id: "312", nombre: "BEATRIZ MORENO", mesaNumero: 30 },
  { id: "313", nombre: "MARIO ZARATE", mesaNumero: 30 },
  { id: "314", nombre: "NATALIA MOLINA", mesaNumero: 30 },
  { id: "315", nombre: "PATRICIA ROJAS", mesaNumero: 30 },
  { id: "316", nombre: "WALTER BRITES", mesaNumero: 30 },
  { id: "317", nombre: "DANIELA SANCHEZ", mesaNumero: 30 },
  { id: "318", nombre: "NOELIA CORREA", mesaNumero: 30 },
  { id: "319", nombre: "KARINA CATALAN", mesaNumero: 30 },
  { id: "320", nombre: "JOSE DIAZ", mesaNumero: 30 },
  { id: "321", nombre: "NANCY CORREA", mesaNumero: 30 },
  { id: "322", nombre: "MABEL MORENO", mesaNumero: 31 },
  { id: "323", nombre: "MARIA LILIA GOMEZ", mesaNumero: 31 },
  { id: "324", nombre: "CARLOS LORCA", mesaNumero: 31 },
  { id: "325", nombre: "MELA JUAREZ", mesaNumero: 31 },
  { id: "326", nombre: "ROSA JUAREZ", mesaNumero: 31 },
  { id: "327", nombre: "MARTA CASTRO", mesaNumero: 31 },
  { id: "328", nombre: "LUISA DE LA ROSA", mesaNumero: 31 },
  { id: "329", nombre: "CARMEN CORDOBA", mesaNumero: 31 },
  { id: "330", nombre: "ROBERTO SOSA", mesaNumero: 31 },
  { id: "331", nombre: "ANTONIA CORDOBA", mesaNumero: 31 },
  { id: "332", nombre: "GRACIELA GARCIA", mesaNumero: 31 },
  { id: "333", nombre: "FABIAN GONZALEZ", mesaNumero: 32 },
  { id: "334", nombre: "CONTERAS MARINA", mesaNumero: 32 },
  { id: "335", nombre: "ANTELO TERESITA", mesaNumero: 32 },
  { id: "336", nombre: "BRITO ATILIO", mesaNumero: 32 },
  { id: "337", nombre: "MIMI IBAÑEZ", mesaNumero: 32 },
  { id: "338", nombre: "MARIA ROSA JUAREZ", mesaNumero: 32 },
  { id: "339", nombre: "LILIAN CAVALLO", mesaNumero: 32 },
  { id: "340", nombre: "STELLA MARIS JUAREZ", mesaNumero: 32 },
  { id: "341", nombre: "MIRTA NOEMI AGUIRRE", mesaNumero: 32 },
  { id: "342", nombre: "CLAUDIA FERNANDEZ", mesaNumero: 32 },
  { id: "343", nombre: "ABEL ELENA NUÑEZ", mesaNumero: 33 },
  { id: "344", nombre: "BUSTOS PALIZA CLAUDIA", mesaNumero: 33 },
  { id: "345", nombre: "CAMPERO MARIA INES", mesaNumero: 33 },
  { id: "346", nombre: "LILIANA BURGOS", mesaNumero: 33 },
  { id: "347", nombre: "LUIS PACHECO", mesaNumero: 33 },
  { id: "348", nombre: "ADRIANA FERNANDEZ", mesaNumero: 33 },
  { id: "349", nombre: "DANIEL LAZARTE", mesaNumero: 33 },
  { id: "350", nombre: "CECILIA CORREA", mesaNumero: 33 },
  { id: "351", nombre: "JAVIER GAMBINO", mesaNumero: 33 },
  { id: "352", nombre: "MARCELA PALOMINI", mesaNumero: 33 },
  { id: "353", nombre: "FABIANA MEDINA", mesaNumero: 34 },
  { id: "354", nombre: "NANCY GUZMAN", mesaNumero: 34 },
  { id: "355", nombre: "TERESA DIAZ", mesaNumero: 34 },
  { id: "356", nombre: "SILVIA RIVERO", mesaNumero: 34 },
  { id: "357", nombre: "CAROLINA ZAPATA", mesaNumero: 34 },
  { id: "358", nombre: "FLORENCIA ZAPATA", mesaNumero: 34 },
  { id: "359", nombre: "HILDA DIAZ", mesaNumero: 34 },
  { id: "360", nombre: "NORMA RIVADENEIRA", mesaNumero: 34 },
  { id: "361", nombre: "MARQUEZ FERNANDA", mesaNumero: 34 },
  { id: "362", nombre: "VERONICA HERRERA", mesaNumero: 34 },
  { id: "363", nombre: "MARIDO VERO HERRERA", mesaNumero: 34 },
  { id: "364", nombre: "ANA PAULA QUILES", mesaNumero: 35 },
  { id: "365", nombre: "SEBASTIAN SALAZAR", mesaNumero: 35 },
  { id: "366", nombre: "FERNANDA JEREZ", mesaNumero: 35 },
  { id: "367", nombre: "PABLO SORAIRE", mesaNumero: 35 },
  { id: "368", nombre: "FLAVIA CARRANZA", mesaNumero: 35 },
  { id: "369", nombre: "CARINA NOGUEDA", mesaNumero: 35 },
  { id: "370", nombre: "DANIELA MOLINA", mesaNumero: 35 },
  { id: "371", nombre: "MARIA RUIZ", mesaNumero: 35 },
  { id: "372", nombre: "OMAR SOLARINO", mesaNumero: 35 },
  { id: "373", nombre: "MAURICIO RODRIGUEZ", mesaNumero: 35 },
  { id: "374", nombre: "MYRIAM APAS", mesaNumero: 36 },
  { id: "375", nombre: "PATRICIA ALDERETES", mesaNumero: 36 },
  { id: "376", nombre: "NATALIA MORALES", mesaNumero: 36 },
  { id: "377", nombre: "HUGO BRITO", mesaNumero: 36 },
  { id: "378", nombre: "ESPOSA DE HUGO BR", mesaNumero: 36 },
  { id: "379", nombre: "CRISTINA ROMERO", mesaNumero: 36 },
  { id: "380", nombre: "ELOY PEREZ", mesaNumero: 36 },
  { id: "381", nombre: "EDUARDO ALVAREZ", mesaNumero: 36 },
  { id: "382", nombre: "SILVINA GARCIA", mesaNumero: 36 },
  { id: "383", nombre: "MARCELO MERCADO", mesaNumero: 36 },
  { id: "384", nombre: "LOURDES PEREZ", mesaNumero: 37 },
  { id: "385", nombre: "CORINA PALIZA", mesaNumero: 37 },
  { id: "386", nombre: "LORENA SOSA", mesaNumero: 37 },
  { id: "387", nombre: "MARTIN MORILLO", mesaNumero: 37 },
  { id: "388", nombre: "FERNANDA SERRANO", mesaNumero: 37 },
  { id: "389", nombre: "CAROLA ORDOÑEZ", mesaNumero: 37 },
  { id: "390", nombre: "JOSEFA MARTINEZ", mesaNumero: 37 },
  { id: "391", nombre: "LIDIA SANCHEZ", mesaNumero: 37 },
  { id: "392", nombre: "MIRIAN LOPEZ", mesaNumero: 37 },
  { id: "393", nombre: "NATALI GUERRERO", mesaNumero: 37 },
  { id: "394", nombre: "LUJAN JUAREZ", mesaNumero: 37 },
];

const guestCard = document.getElementById('guest-card');
const guestName = document.getElementById('guest-name');
const guestTable = document.getElementById('guest-table');
const guestSeat = document.getElementById('guest-seat');
const searchSection = document.getElementById('search-section');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

document.addEventListener('DOMContentLoaded', () => {
  renderSaloon();
  checkUrlParams();
});

function createTableElement(number) {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  wrapper.id = `table-${number}`;

  const circle = document.createElement('div');
  circle.className = 'table-circle';
  circle.textContent = number;
  wrapper.appendChild(circle);

  const totalChairs = 10;
  const isDesktop = window.innerWidth >= 650;
  const radius = isDesktop ? 28 : 24;

  for (let i = 0; i < totalChairs; i++) {
    const chair = document.createElement('div');
    chair.className = 'chair';
    
    const angleDeg = i * (360 / totalChairs);
    const angleRad = angleDeg * (Math.PI / 180);

    const x = Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * radius;

    chair.style.transform = `translate(${x}px, ${y}px) rotate(${angleDeg + 90}deg)`;
    wrapper.appendChild(chair);
  }

  return wrapper;
}

function renderSaloon() {
  const leftTop = document.getElementById('left-top');
  const leftBottom = document.getElementById('left-bottom');
  const rightTop = document.getElementById('right-top');
  const rightBottom = document.getElementById('right-bottom');

  leftTop.innerHTML = '';
  leftBottom.innerHTML = '';
  rightTop.innerHTML = '';
  rightBottom.innerHTML = '';

  for (let i = 1; i <= 40; i++) {
    const tableElem = createTableElement(i);
    
    if (i <= 14) {
      leftTop.appendChild(tableElem);        // Mesas 1 a 14
    } else if (i <= 28) {
      rightTop.appendChild(tableElem);       // Mesas 15 a 28
    } else if (i <= 34) {
      leftBottom.appendChild(tableElem);     // Mesas 29 a 34
    } else {
      rightBottom.appendChild(tableElem);    // Mesas 35 a 40
    }
  }
}

function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const numeroMesa = urlParams.get('mesa');
  const id = urlParams.get('invitado') || urlParams.get('id');
  const nombre = urlParams.get('nombre');

  // Si escanean el QR de una mesa específica (ej: ?mesa=10)
  if (numeroMesa) {
    resaltarMesaDirecta(numeroMesa);
    searchSection.classList.add('hidden');
    return;
  }

  // Si vienen por búsqueda de invitado o ID individual
  let encontrado = null;
  if (id) {
    encontrado = invitadosDB.find(item => item.id === id.trim());
  } else if (nombre) {
    encontrado = invitadosDB.find(item => item.nombre.toLowerCase().replace(/\s+/g, '') === nombre.toLowerCase().replace(/\s+/g, ''));
  }

  if (encontrado) {
    mostrarInvitado(encontrado);
    searchSection.classList.add('hidden');
  }
}

// Función para iluminar la mesa directamente cuando escanean el QR de mesa
function resaltarMesaDirecta(num) {
  guestName.textContent = `Ubicación: Mesa ${num}`;
  guestTable.textContent = num;
  guestSeat.textContent = "—";
  guestCard.classList.remove('hidden');

  document.querySelectorAll('.table-wrapper').forEach(m => {
    if (m.id === `table-${num}`) {
      m.classList.add('highlight');
      m.classList.remove('dimmed');
    } else {
      m.classList.add('dimmed');
      m.classList.remove('highlight');
    }
  });
}

function mostrarInvitado(invitado) {
  guestName.textContent = invitado.nombre;
  guestTable.textContent = invitado.mesaNumero;
  guestSeat.textContent = invitado.asiento;
  guestCard.classList.remove('hidden');

  document.querySelectorAll('.table-wrapper').forEach(m => {
    if (m.id === `table-${invitado.mesaNumero}`) {
      m.classList.add('highlight');
      m.classList.remove('dimmed');
    } else {
      m.classList.add('dimmed');
      m.classList.remove('highlight');
    }
  });
}

searchBtn.addEventListener('click', realizarBusqueda);
searchInput.addEventListener('input', realizarBusqueda);

function realizarBusqueda() {
  const q = searchInput.value.toLowerCase().trim();
  searchResults.innerHTML = '';
  if (!q) return;
  const res = invitadosDB.filter(i => i.nombre.toLowerCase().includes(q));
  res.slice(0, 5).forEach(inv => {
    const div = document.createElement('div');
    div.className = 'result-item';
    div.innerHTML = `<span>${inv.nombre}</span> <strong>Mesa ${inv.mesaNumero}</strong>`;
    div.onclick = () => { mostrarInvitado(inv); searchResults.innerHTML = ''; searchInput.value = ''; };
    searchResults.appendChild(div);
  });
}

