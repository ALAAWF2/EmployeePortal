const MANAGERS = [
    {
        "username": "شريفة العمري",
        "password": "8491",
        "outlets": []
    },
    {
        "username": "اماني عسيري",
        "password": "3698",
        "outlets": []
    },
    {
        "username": "عبيدة السباعي",
        "password": "1647",
        "outlets": []
    },
    {
        "username": "محمدكلو",
        "password": "4891",
        "outlets": []
    },
    {
        "username": "المنطقة الغربية",
        "password": "1478",
        "outlets": []
    },
    {
        "username": "خليل الصانع",
        "password": "2131",
        "outlets": []
    },
    {
        "username": "رضوان عطيوي",
        "password": "7643",
        "outlets": []
    },
    {
        "username": "عبد الجليل الحبال",
        "password": "1637",
        "outlets": []
    },
    {
        "username": "جهاد ايوبي",
        "password": "2587",
        "outlets": []
    },
    {
        "username": "منطقة الطائف",
        "password": "6342",
        "outlets": []
    },
    {
        "username": "عبدالله السرداح",
        "password": "4618",
        "outlets": []
    }
];

const EMPLOYEES = [
    {
        "employeeId": "0024-محمد رشيد كونتيته",
        "personnelNumber": "0024",
        "name": "محمد رشيد كونتيته",
        "startDate": "2012-01-14",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "0029-منير اين مواين الفان",
        "personnelNumber": "0029",
        "name": "منير اين مواين الفان",
        "startDate": "2014-12-18",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "0030-محمد أسامة جمال الدي",
        "personnelNumber": "0030",
        "name": "محمد أسامة جمال الدي",
        "startDate": "2015-08-26",
        "manager": "عبيدة السباعي",
        "showroom": "1007-KHAYYAT CENTER و 1009-BASATEEN MALL",
        "showroomDetails": [
            {
                "name": "1007-KHAYYAT CENTER",
                "codes": [
                    "1007-C",
                    "1007-E"
                ]
            },
            {
                "name": "1009-BASATEEN MALL",
                "codes": [
                    "1009-C",
                    "1009-E"
                ]
            }
        ],
        "addressBooks": "1007-C;1007-E;1009-C;1009-E"
    },
    {
        "employeeId": "0037-محمد شافي كونابارامب",
        "personnelNumber": "0037",
        "name": "محمد شافي كونابارامب",
        "startDate": "2005-11-30",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "0046-كيمارو وليشاه عبد ال",
        "personnelNumber": "0046",
        "name": "كيمارو وليشاه عبد ال",
        "startDate": "2005-12-30",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "0051-سليم شمس الدين",
        "personnelNumber": "0051",
        "name": "سليم شمس الدين",
        "startDate": "2015-09-30",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL و 1012-SAUQ7 CENTER",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            },
            {
                "name": "1012-SAUQ7 CENTER",
                "codes": [
                    "1012-C",
                    "1012-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E;1012-C;1012-E"
    },
    {
        "employeeId": "0090-عبد الناظر اون يابا",
        "personnelNumber": "0090",
        "name": "عبد الناظر اون يابا",
        "startDate": "2014-03-06",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "0158-محمود محمد خير محجوب",
        "personnelNumber": "0158",
        "name": "محمود محمد خير محجوب",
        "startDate": "2017-02-14",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "0198-معتصم اسماعيل العامر",
        "personnelNumber": "0198",
        "name": "معتصم اسماعيل العامر",
        "startDate": "2017-05-05",
        "manager": "عبد الجليل الحبال",
        "showroom": "1112-MEEM PLAZA CENTER",
        "showroomDetails": [
            {
                "name": "1112-MEEM PLAZA CENTER",
                "codes": [
                    "1112-C",
                    "1112-E"
                ]
            }
        ],
        "addressBooks": "1112-C;1112-E"
    },
    {
        "employeeId": "0240-سيبودين بوكودان (شها",
        "personnelNumber": "0240",
        "name": "سيبودين بوكودان (شها",
        "startDate": "2017-07-01",
        "manager": "جهاد ايوبي",
        "showroom": "2201-JUBAIL MALL",
        "showroomDetails": [
            {
                "name": "2201-JUBAIL MALL",
                "codes": [
                    "2201-C",
                    "2201-E"
                ]
            }
        ],
        "addressBooks": "2201-C;2201-E"
    },
    {
        "employeeId": "0262-فهد كوتي",
        "personnelNumber": "0262",
        "name": "فهد كوتي",
        "startDate": "2017-08-29",
        "manager": "خليل الصانع",
        "showroom": "2301-JOUF MALL",
        "showroomDetails": [
            {
                "name": "2301-JOUF MALL",
                "codes": [
                    "2301-C",
                    "2301-E"
                ]
            }
        ],
        "addressBooks": "2301-C;2301-E"
    },
    {
        "employeeId": "0263-فيصل كوتارتودي (بابو",
        "personnelNumber": "0263",
        "name": "فيصل كوتارتودي (بابو",
        "startDate": "2017-08-19",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "0284-محمد عدنان محمد بشير",
        "personnelNumber": "0284",
        "name": "محمد عدنان محمد بشير",
        "startDate": "2017-11-01",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER و 1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            },
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E;1203-C;1203-E"
    },
    {
        "employeeId": "0296-محمد علي كامل",
        "personnelNumber": "0296",
        "name": "محمد علي كامل",
        "startDate": "2017-11-18",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E"
    },
    {
        "employeeId": "0412-عاصم عبد الودود البا",
        "personnelNumber": "0412",
        "name": "عاصم عبد الودود البا",
        "startDate": "2018-01-25",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "0488-نزار فيسيار",
        "personnelNumber": "0488",
        "name": "نزار فيسيار",
        "startDate": "2018-07-31",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "0762-بلال المبيض",
        "personnelNumber": "0762",
        "name": "بلال المبيض",
        "startDate": "2019-07-13",
        "manager": "عبيدة السباعي",
        "showroom": "1009-BASATEEN MALL",
        "showroomDetails": [
            {
                "name": "1009-BASATEEN MALL",
                "codes": [
                    "1009-C",
                    "1009-E"
                ]
            }
        ],
        "addressBooks": "1009-C;1009-E"
    },
    {
        "employeeId": "0822-عبد الغفور جهاد الأح",
        "personnelNumber": "0822",
        "name": "عبد الغفور جهاد الأح",
        "startDate": "2019-09-17",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "0869-MOTAR MOKHTAR ALHASA",
        "personnelNumber": "0869",
        "name": "MOTAR MOKHTAR ALHASA",
        "startDate": "2019-12-01",
        "manager": "عبد الجليل الحبال",
        "showroom": "1112-MEEM PLAZA CENTER",
        "showroomDetails": [
            {
                "name": "1112-MEEM PLAZA CENTER",
                "codes": [
                    "1112-C",
                    "1112-E"
                ]
            }
        ],
        "addressBooks": "1112-C;1112-E"
    },
    {
        "employeeId": "0896-سونير فاديل اليكويا",
        "personnelNumber": "0896",
        "name": "سونير فاديل اليكويا",
        "startDate": "2020-02-29",
        "manager": "محمدكلو",
        "showroom": "1107-RIYADH PARK MALL",
        "showroomDetails": [
            {
                "name": "1107-RIYADH PARK MALL",
                "codes": [
                    "1107-C",
                    "1107-E"
                ]
            }
        ],
        "addressBooks": "1107-C;1107-E"
    },
    {
        "employeeId": "0897-اشف بونور سنجدن",
        "personnelNumber": "0897",
        "name": "اشف بونور سنجدن",
        "startDate": "2020-02-29",
        "manager": "محمدكلو",
        "showroom": "1114-Malgha Mall",
        "showroomDetails": [
            {
                "name": "1114-Malgha Mall",
                "codes": [
                    "1114-C",
                    "1114-E"
                ]
            }
        ],
        "addressBooks": "1114-C;1114-E"
    },
    {
        "employeeId": "0902-ساجد ثوتوكاد رشيد",
        "personnelNumber": "0902",
        "name": "ساجد ثوتوكاد رشيد",
        "startDate": "2020-02-29",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "0909-سافاد شيرونيل مجيد",
        "personnelNumber": "0909",
        "name": "سافاد شيرونيل مجيد",
        "startDate": "2020-02-29",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "0916-عبد السليم والنيغر",
        "personnelNumber": "0916",
        "name": "عبد السليم والنيغر",
        "startDate": "2020-02-09",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E"
    },
    {
        "employeeId": "0933-حارس كفران كوندان",
        "personnelNumber": "0933",
        "name": "حارس كفران كوندان",
        "startDate": "2020-01-25",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "0936-اشرف محمد المحمود",
        "personnelNumber": "0936",
        "name": "اشرف محمد المحمود",
        "startDate": "2020-02-29",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "0966-ادريس شافي بانقاسيري",
        "personnelNumber": "0966",
        "name": "ادريس شافي بانقاسيري",
        "startDate": "2020-02-21",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "1088-زين ال عبيد ايشه",
        "personnelNumber": "1088",
        "name": "زين ال عبيد ايشه",
        "startDate": "2020-07-31",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "1124-انس عبد القادر نوايا",
        "personnelNumber": "1124",
        "name": "انس عبد القادر نوايا",
        "startDate": "2020-09-04",
        "manager": "منطقة الطائف",
        "showroom": "1302-KAMAL CENTER",
        "showroomDetails": [
            {
                "name": "1302-KAMAL CENTER",
                "codes": [
                    "1302-C",
                    "1302-E"
                ]
            }
        ],
        "addressBooks": "1302-C;1302-E"
    },
    {
        "employeeId": "1271-Fadwa Rashed Aldosse",
        "personnelNumber": "1271",
        "name": "Fadwa Rashed Aldosse",
        "startDate": "2021-02-26",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "1342-فراس رتعان الحسن",
        "personnelNumber": "1342",
        "name": "فراس رتعان الحسن",
        "startDate": "2021-04-01",
        "manager": "عبيدة السباعي",
        "showroom": "1007-KHAYYAT CENTER و 1009-BASATEEN MALL",
        "showroomDetails": [
            {
                "name": "1007-KHAYYAT CENTER",
                "codes": [
                    "1007-C",
                    "1007-E"
                ]
            },
            {
                "name": "1009-BASATEEN MALL",
                "codes": [
                    "1009-C",
                    "1009-E"
                ]
            }
        ],
        "addressBooks": "1007-C;1007-E;1009-C;1009-E"
    },
    {
        "employeeId": "1366-ميار محمد ينبعاوي",
        "personnelNumber": "1366",
        "name": "ميار محمد ينبعاوي",
        "startDate": "2021-04-07",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E"
    },
    {
        "employeeId": "1485-الجوهره سليمان العنز",
        "personnelNumber": "1485",
        "name": "الجوهره سليمان العنز",
        "startDate": "2021-07-04",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "1542-محمد شيبيل فازانكودو",
        "personnelNumber": "1542",
        "name": "محمد شيبيل فازانكودو",
        "startDate": "2021-08-01",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "1543-صالح",
        "personnelNumber": "1543",
        "name": "صالح",
        "startDate": "2021-08-01",
        "manager": "عبدالله السرداح",
        "showroom": "1105-TALA MALL",
        "showroomDetails": [
            {
                "name": "1105-TALA MALL",
                "codes": [
                    "1105-C",
                    "1105-E"
                ]
            }
        ],
        "addressBooks": "1105-C;1105-E"
    },
    {
        "employeeId": "1544-محمد شاجاهان فالاثود",
        "personnelNumber": "1544",
        "name": "محمد شاجاهان فالاثود",
        "startDate": "2021-08-01",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "1545-محمد علي بانشيبالا",
        "personnelNumber": "1545",
        "name": "محمد علي بانشيبالا",
        "startDate": "2021-08-01",
        "manager": "عبيدة السباعي",
        "showroom": "1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1005-C;1005-E"
    },
    {
        "employeeId": "1546-ساجاد يونين ميليكالا",
        "personnelNumber": "1546",
        "name": "ساجاد يونين ميليكالا",
        "startDate": "2021-08-01",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "1556-هنادي كريم العنزي",
        "personnelNumber": "1556",
        "name": "هنادي كريم العنزي",
        "startDate": "2021-08-14",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "1587-شمس الدين كونغاث",
        "personnelNumber": "1587",
        "name": "شمس الدين كونغاث",
        "startDate": "2021-08-19",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "1589-محمد جونيس ميمبار",
        "personnelNumber": "1589",
        "name": "محمد جونيس ميمبار",
        "startDate": "2021-08-20",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "1590-محمد نسيل كونغاث",
        "personnelNumber": "1590",
        "name": "محمد نسيل كونغاث",
        "startDate": "2021-08-20",
        "manager": "عبد الجليل الحبال",
        "showroom": "1103-RABWA MALL",
        "showroomDetails": [
            {
                "name": "1103-RABWA MALL",
                "codes": [
                    "1103-C",
                    "1103-E"
                ]
            }
        ],
        "addressBooks": "1103-C;1103-E"
    },
    {
        "employeeId": "1592-محمد محسن",
        "personnelNumber": "1592",
        "name": "محمد محسن",
        "startDate": "2021-08-19",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "1593-نافاز باثاري",
        "personnelNumber": "1593",
        "name": "نافاز باثاري",
        "startDate": "2021-08-19",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "1596-نهى سعيد ال ناصر",
        "personnelNumber": "1596",
        "name": "نهى سعيد ال ناصر",
        "startDate": "2021-09-03",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "1635-سميه احمد الخالدي",
        "personnelNumber": "1635",
        "name": "سميه احمد الخالدي",
        "startDate": "2021-09-12",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "2676-منال عبدالله الحربي",
        "personnelNumber": "2676",
        "name": "منال عبدالله الحربي",
        "startDate": "2021-10-08",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "2680-فايزة صالح الرشيدي",
        "personnelNumber": "2680",
        "name": "فايزة صالح الرشيدي",
        "startDate": "2021-10-11",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "2714-محمد رشيق ثيرلامباتا",
        "personnelNumber": "2714",
        "name": "محمد رشيق ثيرلامباتا",
        "startDate": "2021-10-20",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "2718-محمد شانيد ثيريالابي",
        "personnelNumber": "2718",
        "name": "محمد شانيد ثيريالابي",
        "startDate": "2021-10-20",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "2720-اسفق بوثاني",
        "personnelNumber": "2720",
        "name": "اسفق بوثاني",
        "startDate": "2021-10-20",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "2721-محمد ريشاد بارامبورا",
        "personnelNumber": "2721",
        "name": "محمد ريشاد بارامبورا",
        "startDate": "2021-10-20",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "2737-محمد موسثاق بودافيل",
        "personnelNumber": "2737",
        "name": "محمد موسثاق بودافيل",
        "startDate": "2021-10-31",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL و 1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            },
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E;1906-C;1906-E"
    },
    {
        "employeeId": "2738-سافاد ثوتوكاد عبدالق",
        "personnelNumber": "2738",
        "name": "سافاد ثوتوكاد عبدالق",
        "startDate": "2021-10-30",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "2739-محمد شاهيد شيروكارا",
        "personnelNumber": "2739",
        "name": "محمد شاهيد شيروكارا",
        "startDate": "2021-10-31",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "2743-محمد ايرشاد كوناكاتي",
        "personnelNumber": "2743",
        "name": "محمد ايرشاد كوناكاتي",
        "startDate": "2021-10-31",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "2744-عبدالباري كابوكونان",
        "personnelNumber": "2744",
        "name": "عبدالباري كابوكونان",
        "startDate": "2021-10-31",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "2796-محمد شفيق ميلا باثود",
        "personnelNumber": "2796",
        "name": "محمد شفيق ميلا باثود",
        "startDate": "2021-11-29",
        "manager": "خليل الصانع",
        "showroom": "1501-DANA MALL",
        "showroomDetails": [
            {
                "name": "1501-DANA MALL",
                "codes": [
                    "1501-C",
                    "1501-E"
                ]
            }
        ],
        "addressBooks": "1501-C;1501-E"
    },
    {
        "employeeId": "2801-محمد بشير فيلانشولا",
        "personnelNumber": "2801",
        "name": "محمد بشير فيلانشولا",
        "startDate": "2021-12-08",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "2802-انس ملاذ",
        "personnelNumber": "2802",
        "name": "انس ملاذ",
        "startDate": "2021-12-08",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "2804-ارشاد بالبيتا",
        "personnelNumber": "2804",
        "name": "ارشاد بالبيتا",
        "startDate": "2021-12-07",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "2806-شاروك ثوران",
        "personnelNumber": "2806",
        "name": "شاروك ثوران",
        "startDate": "2021-12-08",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "2816-Marwa Mubarak Alshal",
        "personnelNumber": "2816",
        "name": "Marwa Mubarak Alshal",
        "startDate": "2021-12-20",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "2821-عبدالسليم كابيل",
        "personnelNumber": "2821",
        "name": "عبدالسليم كابيل",
        "startDate": "2021-12-25",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "3029-محمد شان",
        "personnelNumber": "3029",
        "name": "محمد شان",
        "startDate": "2022-04-26",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "3034-اسماعيل عبدالمالك خي",
        "personnelNumber": "3034",
        "name": "اسماعيل عبدالمالك خي",
        "startDate": "2022-05-22",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "3057-افنان حمد السواط",
        "personnelNumber": "3057",
        "name": "افنان حمد السواط",
        "startDate": "2022-06-08",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "3245-رنيم ابراهيم الحربي",
        "personnelNumber": "3245",
        "name": "رنيم ابراهيم الحربي",
        "startDate": "2022-09-17",
        "manager": "خليل الصانع",
        "showroom": "1501-DANA MALL",
        "showroomDetails": [
            {
                "name": "1501-DANA MALL",
                "codes": [
                    "1501-C",
                    "1501-E"
                ]
            }
        ],
        "addressBooks": "1501-C;1501-E"
    },
    {
        "employeeId": "3280-سلمان فارس فايل",
        "personnelNumber": "3280",
        "name": "سلمان فارس فايل",
        "startDate": "2022-10-08",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "3331-سالمانول فارس باركال",
        "personnelNumber": "3331",
        "name": "سالمانول فارس باركال",
        "startDate": "2022-10-22",
        "manager": "محمدكلو",
        "showroom": "1107-RIYADH PARK MALL",
        "showroomDetails": [
            {
                "name": "1107-RIYADH PARK MALL",
                "codes": [
                    "1107-C",
                    "1107-E"
                ]
            }
        ],
        "addressBooks": "1107-C;1107-E"
    },
    {
        "employeeId": "3332-محمد انصر",
        "personnelNumber": "3332",
        "name": "محمد انصر",
        "startDate": "2022-10-22",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL و 1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            },
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E;1203-C;1203-E"
    },
    {
        "employeeId": "3333-منهاج الونجال",
        "personnelNumber": "3333",
        "name": "منهاج الونجال",
        "startDate": "2022-10-21",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "3335-دانيش مون كولان",
        "personnelNumber": "3335",
        "name": "دانيش مون كولان",
        "startDate": "2022-10-22",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL و 1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            },
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E;1004-C;1004-E"
    },
    {
        "employeeId": "3338-ريشاد",
        "personnelNumber": "3338",
        "name": "ريشاد",
        "startDate": "2022-10-22",
        "manager": "محمدكلو",
        "showroom": "1106-ATYAF MALL",
        "showroomDetails": [
            {
                "name": "1106-ATYAF MALL",
                "codes": [
                    "1106-C",
                    "1106-E"
                ]
            }
        ],
        "addressBooks": "1106-C;1106-E"
    },
    {
        "employeeId": "3339-اشف انصاري نانمبرا",
        "personnelNumber": "3339",
        "name": "اشف انصاري نانمبرا",
        "startDate": "2022-10-22",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "3341-محمد فيفاز",
        "personnelNumber": "3341",
        "name": "محمد فيفاز",
        "startDate": "2022-10-22",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "3345-ثاجودين باثنقادي",
        "personnelNumber": "3345",
        "name": "ثاجودين باثنقادي",
        "startDate": "2022-10-21",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "3367-جیشاد اثمانيل",
        "personnelNumber": "3367",
        "name": "جیشاد اثمانيل",
        "startDate": "2022-10-29",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "3368-محمد مصطفى كورمبي",
        "personnelNumber": "3368",
        "name": "محمد مصطفى كورمبي",
        "startDate": "2022-10-28",
        "manager": "اماني عسيري",
        "showroom": "1904-BAHA MALL",
        "showroomDetails": [
            {
                "name": "1904-BAHA MALL",
                "codes": [
                    "1904-C",
                    "1904-E"
                ]
            }
        ],
        "addressBooks": "1904-C;1904-E"
    },
    {
        "employeeId": "3370-محمد نبيل بابات",
        "personnelNumber": "3370",
        "name": "محمد نبيل بابات",
        "startDate": "2022-10-29",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "3371-راشيد بوناكادان",
        "personnelNumber": "3371",
        "name": "راشيد بوناكادان",
        "startDate": "2022-10-29",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "3373-محمد رافسال فينجاسير",
        "personnelNumber": "3373",
        "name": "محمد رافسال فينجاسير",
        "startDate": "2022-10-29",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "3375-محمد شافي ناصر",
        "personnelNumber": "3375",
        "name": "محمد شافي ناصر",
        "startDate": "2022-10-14",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "3402-احمد مجاب",
        "personnelNumber": "3402",
        "name": "احمد مجاب",
        "startDate": "2022-12-12",
        "manager": "محمدكلو",
        "showroom": "1115-Alrabie Mall",
        "showroomDetails": [
            {
                "name": "1115-Alrabie Mall",
                "codes": [
                    "1115-C",
                    "1115-E"
                ]
            }
        ],
        "addressBooks": "1115-C;1115-E"
    },
    {
        "employeeId": "3410-فيصل احمد العمري",
        "personnelNumber": "3410",
        "name": "فيصل احمد العمري",
        "startDate": "2022-12-21",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "3417-Rana Refede Alshehri",
        "personnelNumber": "3417",
        "name": "Rana Refede Alshehri",
        "startDate": "2022-12-31",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "3495-نورة فوزي الوسمي",
        "personnelNumber": "3495",
        "name": "نورة فوزي الوسمي",
        "startDate": "2023-02-13",
        "manager": "جهاد ايوبي",
        "showroom": "1602-EHSA MALL",
        "showroomDetails": [
            {
                "name": "1602-EHSA MALL",
                "codes": [
                    "1602-C",
                    "1602-E"
                ]
            }
        ],
        "addressBooks": "1602-C;1602-E"
    },
    {
        "employeeId": "3537-محمد محسن كلاي",
        "personnelNumber": "3537",
        "name": "محمد محسن كلاي",
        "startDate": "2023-03-19",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "3539-محمد ارشد ايليداث",
        "personnelNumber": "3539",
        "name": "محمد ارشد ايليداث",
        "startDate": "2023-03-20",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "3588-محمد مونبار",
        "personnelNumber": "3588",
        "name": "محمد مونبار",
        "startDate": "2023-05-31",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "3625-بشاير محمد الجهني",
        "personnelNumber": "3625",
        "name": "بشاير محمد الجهني",
        "startDate": "2023-07-14",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "3626-مزنة محمد الجهني",
        "personnelNumber": "3626",
        "name": "مزنة محمد الجهني",
        "startDate": "2023-07-14",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E"
    },
    {
        "employeeId": "3628-اشجان عبدالله العشوا",
        "personnelNumber": "3628",
        "name": "اشجان عبدالله العشوا",
        "startDate": "2023-07-18",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "3664-عماد محمد ضاهر",
        "personnelNumber": "3664",
        "name": "عماد محمد ضاهر",
        "startDate": "2023-08-11",
        "manager": "عبيدة السباعي",
        "showroom": "1007-KHAYYAT CENTER",
        "showroomDetails": [
            {
                "name": "1007-KHAYYAT CENTER",
                "codes": [
                    "1007-C",
                    "1007-E"
                ]
            }
        ],
        "addressBooks": "1007-C;1007-E"
    },
    {
        "employeeId": "3665-لطيفة فهد الدوسري",
        "personnelNumber": "3665",
        "name": "لطيفة فهد الدوسري",
        "startDate": "2023-08-12",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "3672-مشاعل عمري الصحفي",
        "personnelNumber": "3672",
        "name": "مشاعل عمري الصحفي",
        "startDate": "2023-08-15",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "3701-مروج هادي فلقي",
        "personnelNumber": "3701",
        "name": "مروج هادي فلقي",
        "startDate": "2023-08-26",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "3711-تركي إبراهيم رمضان",
        "personnelNumber": "3711",
        "name": "تركي إبراهيم رمضان",
        "startDate": "2023-08-31",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "3727-شابير مولياثودي",
        "personnelNumber": "3727",
        "name": "شابير مولياثودي",
        "startDate": "2023-09-12",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "3728-سالمانول فارس مداثيب",
        "personnelNumber": "3728",
        "name": "سالمانول فارس مداثيب",
        "startDate": "2023-09-11",
        "manager": "عبد الجليل الحبال",
        "showroom": "1102-OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1102-OTHAIM MALL",
                "codes": [
                    "1102-C",
                    "1102-E"
                ]
            }
        ],
        "addressBooks": "1102-C;1102-E"
    },
    {
        "employeeId": "3729-محمد مبشر تشيراياكوث",
        "personnelNumber": "3729",
        "name": "محمد مبشر تشيراياكوث",
        "startDate": "2023-09-12",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "3731-محمد سابيل باثاري",
        "personnelNumber": "3731",
        "name": "محمد سابيل باثاري",
        "startDate": "2023-09-12",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "3734-محمد هشير ماليكال",
        "personnelNumber": "3734",
        "name": "محمد هشير ماليكال",
        "startDate": "2023-09-12",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL و 1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            },
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E;1005-C;1005-E"
    },
    {
        "employeeId": "3735-شاجهان كورمبوتوثوديل",
        "personnelNumber": "3735",
        "name": "شاجهان كورمبوتوثوديل",
        "startDate": "2023-09-12",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "3737-محمد شفيق بالاكال مو",
        "personnelNumber": "3737",
        "name": "محمد شفيق بالاكال مو",
        "startDate": "2023-09-12",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "3765-منى مرزوق الشلوي",
        "personnelNumber": "3765",
        "name": "منى مرزوق الشلوي",
        "startDate": "2023-09-20",
        "manager": "جهاد ايوبي",
        "showroom": "1602-EHSA MALL",
        "showroomDetails": [
            {
                "name": "1602-EHSA MALL",
                "codes": [
                    "1602-C",
                    "1602-E"
                ]
            }
        ],
        "addressBooks": "1602-C;1602-E"
    },
    {
        "employeeId": "3778-فاطمة إبراهيم الكياد",
        "personnelNumber": "3778",
        "name": "فاطمة إبراهيم الكياد",
        "startDate": "2023-09-30",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "3780-شيخة لافي الرشيدي",
        "personnelNumber": "3780",
        "name": "شيخة لافي الرشيدي",
        "startDate": "2023-09-30",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "3826-غادة عبدالرحمن البلو",
        "personnelNumber": "3826",
        "name": "غادة عبدالرحمن البلو",
        "startDate": "2023-11-10",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "3881-رنيم احمد السميري",
        "personnelNumber": "3881",
        "name": "رنيم احمد السميري",
        "startDate": "2023-12-27",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "3890-عادل منور فاريا تودي",
        "personnelNumber": "3890",
        "name": "عادل منور فاريا تودي",
        "startDate": "2023-12-31",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "3896-مها محمد الشهري",
        "personnelNumber": "3896",
        "name": "مها محمد الشهري",
        "startDate": "2024-01-07",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "3898-ملاك وحيد باز",
        "personnelNumber": "3898",
        "name": "ملاك وحيد باز",
        "startDate": "2024-01-07",
        "manager": "عبيدة السباعي",
        "showroom": "1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1005-C;1005-E"
    },
    {
        "employeeId": "3903-صفيه حمود الحربي",
        "personnelNumber": "3903",
        "name": "صفيه حمود الحربي",
        "startDate": "2024-01-08",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "3963-رجوى محمد السفري",
        "personnelNumber": "3963",
        "name": "رجوى محمد السفري",
        "startDate": "2024-01-31",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "3965-سيرين بشير هوساوي",
        "personnelNumber": "3965",
        "name": "سيرين بشير هوساوي",
        "startDate": "2024-01-31",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "3986-نوره حمدان البلوي",
        "personnelNumber": "3986",
        "name": "نوره حمدان البلوي",
        "startDate": "2024-02-07",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "4016-شروق علي الشهري",
        "personnelNumber": "4016",
        "name": "شروق علي الشهري",
        "startDate": "2024-03-01",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "4025-أسماء عبدالله الحجور",
        "personnelNumber": "4025",
        "name": "أسماء عبدالله الحجور",
        "startDate": "2024-03-02",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4029-نهاد عثمان هوساوي",
        "personnelNumber": "4029",
        "name": "نهاد عثمان هوساوي",
        "startDate": "2024-03-03",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4078-حسن طالب",
        "personnelNumber": "4078",
        "name": "حسن طالب",
        "startDate": "2024-03-11",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL و 1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            },
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E;1203-C;1203-E"
    },
    {
        "employeeId": "4085-فراس عبدالستار الخان",
        "personnelNumber": "4085",
        "name": "فراس عبدالستار الخان",
        "startDate": "2024-03-12",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E"
    },
    {
        "employeeId": "4098-روان محمد فطاني",
        "personnelNumber": "4098",
        "name": "روان محمد فطاني",
        "startDate": "2024-03-17",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4099-شاديك",
        "personnelNumber": "4099",
        "name": "شاديك",
        "startDate": "2024-03-14",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4100-رضوان  شياح",
        "personnelNumber": "4100",
        "name": "رضوان  شياح",
        "startDate": "2024-03-15",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER و 1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            },
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E;1203-C;1203-E"
    },
    {
        "employeeId": "4116-روابي رضا الرويثي",
        "personnelNumber": "4116",
        "name": "روابي رضا الرويثي",
        "startDate": "2024-03-26",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "4118-نوف ناصر الصايغ",
        "personnelNumber": "4118",
        "name": "نوف ناصر الصايغ",
        "startDate": "2024-04-16",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4119-اثير عمر عسيري",
        "personnelNumber": "4119",
        "name": "اثير عمر عسيري",
        "startDate": "2024-04-17",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4122-محمدعرفان باثيرامانا",
        "personnelNumber": "4122",
        "name": "محمدعرفان باثيرامانا",
        "startDate": "2024-04-17",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4124-بدريه شريف المالكي",
        "personnelNumber": "4124",
        "name": "بدريه شريف المالكي",
        "startDate": "2024-04-30",
        "manager": "عبيدة السباعي",
        "showroom": "1007-KHAYYAT CENTER",
        "showroomDetails": [
            {
                "name": "1007-KHAYYAT CENTER",
                "codes": [
                    "1007-C",
                    "1007-E"
                ]
            }
        ],
        "addressBooks": "1007-C;1007-E"
    },
    {
        "employeeId": "4141-نزيهه خالد شاعري",
        "personnelNumber": "4141",
        "name": "نزيهه خالد شاعري",
        "startDate": "2024-05-12",
        "manager": "عبيدة السباعي",
        "showroom": "1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1005-C;1005-E"
    },
    {
        "employeeId": "4145-صالحه سعود القرشي",
        "personnelNumber": "4145",
        "name": "صالحه سعود القرشي",
        "startDate": "2024-05-13",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4147-ياسر غنايم الحربي",
        "personnelNumber": "4147",
        "name": "ياسر غنايم الحربي",
        "startDate": "2024-05-13",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4148-وعد هادي عبسي",
        "personnelNumber": "4148",
        "name": "وعد هادي عبسي",
        "startDate": "2024-05-13",
        "manager": "جهاد ايوبي",
        "showroom": "2201-JUBAIL MALL",
        "showroomDetails": [
            {
                "name": "2201-JUBAIL MALL",
                "codes": [
                    "2201-C",
                    "2201-E"
                ]
            }
        ],
        "addressBooks": "2201-C;2201-E"
    },
    {
        "employeeId": "4149-شمسير علي",
        "personnelNumber": "4149",
        "name": "شمسير علي",
        "startDate": "2024-05-14",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4151-يونس عبدالبديع ملبيا",
        "personnelNumber": "4151",
        "name": "يونس عبدالبديع ملبيا",
        "startDate": "2024-05-14",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "4159-ميساء عبداللطيف محمد",
        "personnelNumber": "4159",
        "name": "ميساء عبداللطيف محمد",
        "startDate": "2024-05-20",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4162-محمد صالح بازامكولاي",
        "personnelNumber": "4162",
        "name": "محمد صالح بازامكولاي",
        "startDate": "2024-05-21",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "4167-محمد سنان",
        "personnelNumber": "4167",
        "name": "محمد سنان",
        "startDate": "2024-05-26",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4169-محمد ارشد",
        "personnelNumber": "4169",
        "name": "محمد ارشد",
        "startDate": "2024-05-26",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4170-إبراهيم بودشا",
        "personnelNumber": "4170",
        "name": "إبراهيم بودشا",
        "startDate": "2024-05-26",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4171-انصل طه",
        "personnelNumber": "4171",
        "name": "انصل طه",
        "startDate": "2024-05-26",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4172-مرشد بادوفل",
        "personnelNumber": "4172",
        "name": "مرشد بادوفل",
        "startDate": "2024-05-26",
        "manager": "جهاد ايوبي",
        "showroom": "1602-EHSA MALL",
        "showroomDetails": [
            {
                "name": "1602-EHSA MALL",
                "codes": [
                    "1602-C",
                    "1602-E"
                ]
            }
        ],
        "addressBooks": "1602-C;1602-E"
    },
    {
        "employeeId": "4175-اريج طلال اليماني",
        "personnelNumber": "4175",
        "name": "اريج طلال اليماني",
        "startDate": "2024-06-01",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4190-مرام محمد الزبيدي",
        "personnelNumber": "4190",
        "name": "مرام محمد الزبيدي",
        "startDate": "2024-06-02",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E"
    },
    {
        "employeeId": "4194-امل محمد كرتيل",
        "personnelNumber": "4194",
        "name": "امل محمد كرتيل",
        "startDate": "2024-06-03",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4198-دول دول لينشاد",
        "personnelNumber": "4198",
        "name": "دول دول لينشاد",
        "startDate": "2024-06-05",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "4199-امل الرويلي",
        "personnelNumber": "4199",
        "name": "امل الرويلي",
        "startDate": "2024-06-08",
        "manager": "خليل الصانع",
        "showroom": "2301-JOUF MALL",
        "showroomDetails": [
            {
                "name": "2301-JOUF MALL",
                "codes": [
                    "2301-C",
                    "2301-E"
                ]
            }
        ],
        "addressBooks": "2301-C;2301-E"
    },
    {
        "employeeId": "4206-عبدالرحمن  زياد دندش",
        "personnelNumber": "4206",
        "name": "عبدالرحمن  زياد دندش",
        "startDate": "2024-06-09",
        "manager": "جهاد ايوبي",
        "showroom": "2201-JUBAIL MALL",
        "showroomDetails": [
            {
                "name": "2201-JUBAIL MALL",
                "codes": [
                    "2201-C",
                    "2201-E"
                ]
            }
        ],
        "addressBooks": "2201-C;2201-E"
    },
    {
        "employeeId": "4209-امجاد ظافر الشهري",
        "personnelNumber": "4209",
        "name": "امجاد ظافر الشهري",
        "startDate": "2024-06-10",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "4217-ليان سليمان الرشود",
        "personnelNumber": "4217",
        "name": "ليان سليمان الرشود",
        "startDate": "2024-06-11",
        "manager": "عبد الجليل الحبال",
        "showroom": "1102-OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1102-OTHAIM MALL",
                "codes": [
                    "1102-C",
                    "1102-E"
                ]
            }
        ],
        "addressBooks": "1102-C;1102-E"
    },
    {
        "employeeId": "4231-روان فهد العطوان",
        "personnelNumber": "4231",
        "name": "روان فهد العطوان",
        "startDate": "2024-06-25",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4242-محمد شمير كوندو بارا",
        "personnelNumber": "4242",
        "name": "محمد شمير كوندو بارا",
        "startDate": "2024-07-07",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4245-موده سليمان الدويرعا",
        "personnelNumber": "4245",
        "name": "موده سليمان الدويرعا",
        "startDate": "2024-07-07",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4246-محمد ناصر",
        "personnelNumber": "4246",
        "name": "محمد ناصر",
        "startDate": "2024-07-07",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4250-ايمان حسن المالكي",
        "personnelNumber": "4250",
        "name": "ايمان حسن المالكي",
        "startDate": "2024-07-07",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "4255-هيله هادي العليلي",
        "personnelNumber": "4255",
        "name": "هيله هادي العليلي",
        "startDate": "2024-07-13",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "4259-جمانة عبدالله العسير",
        "personnelNumber": "4259",
        "name": "جمانة عبدالله العسير",
        "startDate": "2024-07-16",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4285-ميعاد جابر الريثى",
        "personnelNumber": "4285",
        "name": "ميعاد جابر الريثى",
        "startDate": "2024-07-31",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "4306-اماني احمد عسيري",
        "personnelNumber": "4306",
        "name": "اماني احمد عسيري",
        "startDate": "2024-08-13",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "4308-خديجة الرويلي",
        "personnelNumber": "4308",
        "name": "خديجة الرويلي",
        "startDate": "2024-08-17",
        "manager": "خليل الصانع",
        "showroom": "2301-JOUF MALL",
        "showroomDetails": [
            {
                "name": "2301-JOUF MALL",
                "codes": [
                    "2301-C",
                    "2301-E"
                ]
            }
        ],
        "addressBooks": "2301-C;2301-E"
    },
    {
        "employeeId": "4312-سارة الحارثي",
        "personnelNumber": "4312",
        "name": "سارة الحارثي",
        "startDate": "2024-08-18",
        "manager": "اماني عسيري",
        "showroom": "1904-BAHA MALL",
        "showroomDetails": [
            {
                "name": "1904-BAHA MALL",
                "codes": [
                    "1904-C",
                    "1904-E"
                ]
            }
        ],
        "addressBooks": "1904-C;1904-E"
    },
    {
        "employeeId": "4315-Wejdan Abdullah Alsa",
        "personnelNumber": "4315",
        "name": "Wejdan Abdullah Alsa",
        "startDate": "2024-08-20",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4318-نوره القرني",
        "personnelNumber": "4318",
        "name": "نوره القرني",
        "startDate": "2024-08-31",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4320-امل العنزي",
        "personnelNumber": "4320",
        "name": "امل العنزي",
        "startDate": "2024-08-31",
        "manager": "خليل الصانع",
        "showroom": "1701-ARAR OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1701-ARAR OTHAIM MALL",
                "codes": [
                    "1701-C",
                    "1701-E"
                ]
            }
        ],
        "addressBooks": "1701-C;1701-E"
    },
    {
        "employeeId": "4325-مريم العنزي",
        "personnelNumber": "4325",
        "name": "مريم العنزي",
        "startDate": "2024-09-02",
        "manager": "خليل الصانع",
        "showroom": "1701-ARAR OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1701-ARAR OTHAIM MALL",
                "codes": [
                    "1701-C",
                    "1701-E"
                ]
            }
        ],
        "addressBooks": "1701-C;1701-E"
    },
    {
        "employeeId": "4330-اسرار الزهراني",
        "personnelNumber": "4330",
        "name": "اسرار الزهراني",
        "startDate": "2024-09-09",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4340-هيلا الحارثي",
        "personnelNumber": "4340",
        "name": "هيلا الحارثي",
        "startDate": "2024-09-14",
        "manager": "منطقة الطائف",
        "showroom": "1302-KAMAL CENTER",
        "showroomDetails": [
            {
                "name": "1302-KAMAL CENTER",
                "codes": [
                    "1302-C",
                    "1302-E"
                ]
            }
        ],
        "addressBooks": "1302-C;1302-E"
    },
    {
        "employeeId": "4345-امجاد عبدالعزيز",
        "personnelNumber": "4345",
        "name": "امجاد عبدالعزيز",
        "startDate": "2024-09-17",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4349-فوز القرني",
        "personnelNumber": "4349",
        "name": "فوز القرني",
        "startDate": "2024-09-18",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "4359-هناء المدوح",
        "personnelNumber": "4359",
        "name": "هناء المدوح",
        "startDate": "2024-10-12",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4366-نوره هوساوي",
        "personnelNumber": "4366",
        "name": "نوره هوساوي",
        "startDate": "2024-10-19",
        "manager": "منطقة الطائف",
        "showroom": "1302-KAMAL CENTER",
        "showroomDetails": [
            {
                "name": "1302-KAMAL CENTER",
                "codes": [
                    "1302-C",
                    "1302-E"
                ]
            }
        ],
        "addressBooks": "1302-C;1302-E"
    },
    {
        "employeeId": "4369-ابتسام الزهراني",
        "personnelNumber": "4369",
        "name": "ابتسام الزهراني",
        "startDate": "2024-10-21",
        "manager": "منطقة الطائف",
        "showroom": "1302-KAMAL CENTER",
        "showroomDetails": [
            {
                "name": "1302-KAMAL CENTER",
                "codes": [
                    "1302-C",
                    "1302-E"
                ]
            }
        ],
        "addressBooks": "1302-C;1302-E"
    },
    {
        "employeeId": "4377-حنان الغامدي",
        "personnelNumber": "4377",
        "name": "حنان الغامدي",
        "startDate": "2024-11-03",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "4379-سمية سالم",
        "personnelNumber": "4379",
        "name": "سمية سالم",
        "startDate": "2024-11-03",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "4384-بشرى الناشري",
        "personnelNumber": "4384",
        "name": "بشرى الناشري",
        "startDate": "2024-11-09",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4391-غيد الشمري",
        "personnelNumber": "4391",
        "name": "غيد الشمري",
        "startDate": "2024-11-09",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "4394-حسين عيون السود",
        "personnelNumber": "4394",
        "name": "حسين عيون السود",
        "startDate": "2024-11-16",
        "manager": "عبيدة السباعي",
        "showroom": "1007-KHAYYAT CENTER و 1009-BASATEEN MALL",
        "showroomDetails": [
            {
                "name": "1007-KHAYYAT CENTER",
                "codes": [
                    "1007-C",
                    "1007-E"
                ]
            },
            {
                "name": "1009-BASATEEN MALL",
                "codes": [
                    "1009-C",
                    "1009-E"
                ]
            }
        ],
        "addressBooks": "1007-C;1007-E;1009-C;1009-E"
    },
    {
        "employeeId": "4396-غيداء مكي",
        "personnelNumber": "4396",
        "name": "غيداء مكي",
        "startDate": "2024-11-11",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4398-Ghada Shuwaymi AlOta",
        "personnelNumber": "4398",
        "name": "Ghada Shuwaymi AlOta",
        "startDate": "2024-11-13",
        "manager": "عبدالله السرداح",
        "showroom": "1105-TALA MALL",
        "showroomDetails": [
            {
                "name": "1105-TALA MALL",
                "codes": [
                    "1105-C",
                    "1105-E"
                ]
            }
        ],
        "addressBooks": "1105-C;1105-E"
    },
    {
        "employeeId": "4401-نوره الغامدي",
        "personnelNumber": "4401",
        "name": "نوره الغامدي",
        "startDate": "2024-11-17",
        "manager": "اماني عسيري",
        "showroom": "1904-BAHA MALL",
        "showroomDetails": [
            {
                "name": "1904-BAHA MALL",
                "codes": [
                    "1904-C",
                    "1904-E"
                ]
            }
        ],
        "addressBooks": "1904-C;1904-E"
    },
    {
        "employeeId": "4403-Arwa Ali Akfah",
        "personnelNumber": "4403",
        "name": "Arwa Ali Akfah",
        "startDate": "2024-11-18",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4408-روابي الهوساوي",
        "personnelNumber": "4408",
        "name": "روابي الهوساوي",
        "startDate": "2024-11-23",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "4414-سامودين بيلاكال",
        "personnelNumber": "4414",
        "name": "سامودين بيلاكال",
        "startDate": "2024-11-30",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "4415-سيف",
        "personnelNumber": "4415",
        "name": "سيف",
        "startDate": "2024-11-30",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "4418-مها قبلاوي",
        "personnelNumber": "4418",
        "name": "مها قبلاوي",
        "startDate": "2024-12-02",
        "manager": "عبيدة السباعي",
        "showroom": "1012-SAUQ7 CENTER",
        "showroomDetails": [
            {
                "name": "1012-SAUQ7 CENTER",
                "codes": [
                    "1012-C",
                    "1012-E"
                ]
            }
        ],
        "addressBooks": "1012-C;1012-E"
    },
    {
        "employeeId": "4420-اجمل",
        "personnelNumber": "4420",
        "name": "اجمل",
        "startDate": "2024-12-03",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4429-هياء السميح",
        "personnelNumber": "4429",
        "name": "هياء السميح",
        "startDate": "2024-12-16",
        "manager": "محمدكلو",
        "showroom": "1107-RIYADH PARK MALL",
        "showroomDetails": [
            {
                "name": "1107-RIYADH PARK MALL",
                "codes": [
                    "1107-C",
                    "1107-E"
                ]
            }
        ],
        "addressBooks": "1107-C;1107-E"
    },
    {
        "employeeId": "4431-في سعيد",
        "personnelNumber": "4431",
        "name": "في سعيد",
        "startDate": "2024-12-21",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4445-عائشة عسيري",
        "personnelNumber": "4445",
        "name": "عائشة عسيري",
        "startDate": "2025-01-15",
        "manager": "عبيدة السباعي",
        "showroom": "1012-SAUQ7 CENTER",
        "showroomDetails": [
            {
                "name": "1012-SAUQ7 CENTER",
                "codes": [
                    "1012-C",
                    "1012-E"
                ]
            }
        ],
        "addressBooks": "1012-C;1012-E"
    },
    {
        "employeeId": "4446-أناس",
        "personnelNumber": "4446",
        "name": "أناس",
        "startDate": "2025-01-15",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4452-غدير علي",
        "personnelNumber": "4452",
        "name": "غدير علي",
        "startDate": "2025-01-18",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4455-ريوف القرني",
        "personnelNumber": "4455",
        "name": "ريوف القرني",
        "startDate": "2025-02-01",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4461-سناء الزهراني",
        "personnelNumber": "4461",
        "name": "سناء الزهراني",
        "startDate": "2025-02-01",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4464-نورا المولد",
        "personnelNumber": "4464",
        "name": "نورا المولد",
        "startDate": "2025-02-01",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "4468-مروج محمد",
        "personnelNumber": "4468",
        "name": "مروج محمد",
        "startDate": "2025-02-01",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4491-وعد توفيق",
        "personnelNumber": "4491",
        "name": "وعد توفيق",
        "startDate": "2025-02-12",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4493-حنان الحربي",
        "personnelNumber": "4493",
        "name": "حنان الحربي",
        "startDate": "2025-02-15",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "4495-دانه الزهراني",
        "personnelNumber": "4495",
        "name": "دانه الزهراني",
        "startDate": "2025-02-16",
        "manager": "جهاد ايوبي",
        "showroom": "2201-JUBAIL MALL",
        "showroomDetails": [
            {
                "name": "2201-JUBAIL MALL",
                "codes": [
                    "2201-C",
                    "2201-E"
                ]
            }
        ],
        "addressBooks": "2201-C;2201-E"
    },
    {
        "employeeId": "4505-حنان الشاهين",
        "personnelNumber": "4505",
        "name": "حنان الشاهين",
        "startDate": "2025-02-22",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4506-ليلى الرشيد",
        "personnelNumber": "4506",
        "name": "ليلى الرشيد",
        "startDate": "2025-02-22",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "4507-Danah Ibrahim Maqbou",
        "personnelNumber": "4507",
        "name": "Danah Ibrahim Maqbou",
        "startDate": "2025-02-22",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4514-خالد خندش",
        "personnelNumber": "4514",
        "name": "خالد خندش",
        "startDate": "2025-02-24",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL و 1114-Malgha Mall",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            },
            {
                "name": "1114-Malgha Mall",
                "codes": [
                    "1114-C",
                    "1114-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E;1114-C;1114-E"
    },
    {
        "employeeId": "4516-حوراء عبدالله",
        "personnelNumber": "4516",
        "name": "حوراء عبدالله",
        "startDate": "2025-02-24",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4517-ولاء المعيوف",
        "personnelNumber": "4517",
        "name": "ولاء المعيوف",
        "startDate": "2025-02-25",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "4519-هدى الفهمي",
        "personnelNumber": "4519",
        "name": "هدى الفهمي",
        "startDate": "2025-03-01",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "4520-محمدحارس كنهراكدفن",
        "personnelNumber": "4520",
        "name": "محمدحارس كنهراكدفن",
        "startDate": "2025-03-01",
        "manager": "اماني عسيري",
        "showroom": "1904-BAHA MALL",
        "showroomDetails": [
            {
                "name": "1904-BAHA MALL",
                "codes": [
                    "1904-C",
                    "1904-E"
                ]
            }
        ],
        "addressBooks": "1904-C;1904-E"
    },
    {
        "employeeId": "4521-مراد الطس",
        "personnelNumber": "4521",
        "name": "مراد الطس",
        "startDate": "2025-03-02",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4523-نهلة محمد",
        "personnelNumber": "4523",
        "name": "نهلة محمد",
        "startDate": "2025-03-02",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4532-Ali Khalil Kunayd",
        "personnelNumber": "4532",
        "name": "Ali Khalil Kunayd",
        "startDate": "2025-02-26",
        "manager": "عبيدة السباعي",
        "showroom": "1012-SAUQ7 CENTER",
        "showroomDetails": [
            {
                "name": "1012-SAUQ7 CENTER",
                "codes": [
                    "1012-C",
                    "1012-E"
                ]
            }
        ],
        "addressBooks": "1012-C;1012-E"
    },
    {
        "employeeId": "4533-Motar Mokhtar Alhasa",
        "personnelNumber": "4533",
        "name": "Motar Mokhtar Alhasa",
        "startDate": "2025-03-01",
        "manager": "عبد الجليل الحبال",
        "showroom": "1112-MEEM PLAZA CENTER",
        "showroomDetails": [
            {
                "name": "1112-MEEM PLAZA CENTER",
                "codes": [
                    "1112-C",
                    "1112-E"
                ]
            }
        ],
        "addressBooks": "1112-C;1112-E"
    },
    {
        "employeeId": "4555-بدريه الجهني",
        "personnelNumber": "4555",
        "name": "بدريه الجهني",
        "startDate": "2025-04-12",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4557-رهف منصوري",
        "personnelNumber": "4557",
        "name": "رهف منصوري",
        "startDate": "2025-04-13",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4559-حنان هلال",
        "personnelNumber": "4559",
        "name": "حنان هلال",
        "startDate": "2025-04-13",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4561-منيرة الشعيل",
        "personnelNumber": "4561",
        "name": "منيرة الشعيل",
        "startDate": "2025-04-19",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "4563-رغد الزهراني",
        "personnelNumber": "4563",
        "name": "رغد الزهراني",
        "startDate": "2025-04-22",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "4564-اثير شراحيلي",
        "personnelNumber": "4564",
        "name": "اثير شراحيلي",
        "startDate": "2025-04-22",
        "manager": "محمدكلو",
        "showroom": "1115-Alrabie Mall",
        "showroomDetails": [
            {
                "name": "1115-Alrabie Mall",
                "codes": [
                    "1115-C",
                    "1115-E"
                ]
            }
        ],
        "addressBooks": "1115-C;1115-E"
    },
    {
        "employeeId": "4565-Mashael Fahad AlAmri",
        "personnelNumber": "4565",
        "name": "Mashael Fahad AlAmri",
        "startDate": "2025-04-22",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4567-هناء عبدالله",
        "personnelNumber": "4567",
        "name": "هناء عبدالله",
        "startDate": "2025-05-03",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "4585-بشاير الحميدي",
        "personnelNumber": "4585",
        "name": "بشاير الحميدي",
        "startDate": "2025-05-13",
        "manager": "عبد الجليل الحبال",
        "showroom": "1102-OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1102-OTHAIM MALL",
                "codes": [
                    "1102-C",
                    "1102-E"
                ]
            }
        ],
        "addressBooks": "1102-C;1102-E"
    },
    {
        "employeeId": "4586-ريناد عبدالله",
        "personnelNumber": "4586",
        "name": "ريناد عبدالله",
        "startDate": "2025-05-14",
        "manager": "عبد الجليل الحبال",
        "showroom": "1102-OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1102-OTHAIM MALL",
                "codes": [
                    "1102-C",
                    "1102-E"
                ]
            }
        ],
        "addressBooks": "1102-C;1102-E"
    },
    {
        "employeeId": "4593-رزان الفهمي",
        "personnelNumber": "4593",
        "name": "رزان الفهمي",
        "startDate": "2025-05-18",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4595-بسمة السهلي",
        "personnelNumber": "4595",
        "name": "بسمة السهلي",
        "startDate": "2025-05-19",
        "manager": "خليل الصانع",
        "showroom": "1402-NOOR MALL و 2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            },
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "1402-C;1402-E;2001-C;2001-E"
    },
    {
        "employeeId": "4599-زهرة الشمراني",
        "personnelNumber": "4599",
        "name": "زهرة الشمراني",
        "startDate": "2025-05-25",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4600-خلود الرفاعي",
        "personnelNumber": "4600",
        "name": "خلود الرفاعي",
        "startDate": "2025-05-25",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4601-حسان العرافي",
        "personnelNumber": "4601",
        "name": "حسان العرافي",
        "startDate": "2025-05-26",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4603-سلطان حارس",
        "personnelNumber": "4603",
        "name": "سلطان حارس",
        "startDate": "2025-05-28",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "4614-Lena Majdi Nawar",
        "personnelNumber": "4614",
        "name": "Lena Majdi Nawar",
        "startDate": "2025-06-14",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4615-نوال خضر",
        "personnelNumber": "4615",
        "name": "نوال خضر",
        "startDate": "2025-06-17",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4611-الهنوف سالم",
        "personnelNumber": "4611",
        "name": "الهنوف سالم",
        "startDate": "2025-06-10",
        "manager": "جهاد ايوبي",
        "showroom": "1602-EHSA MALL",
        "showroomDetails": [
            {
                "name": "1602-EHSA MALL",
                "codes": [
                    "1602-C",
                    "1602-E"
                ]
            }
        ],
        "addressBooks": "1602-C;1602-E"
    },
    {
        "employeeId": "4612-محمد الخيري",
        "personnelNumber": "4612",
        "name": "محمد الخيري",
        "startDate": "2025-06-10",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4577-رنيم اليزيدي",
        "personnelNumber": "4577",
        "name": "رنيم اليزيدي",
        "startDate": "2025-05-07",
        "manager": "عبد الجليل الحبال",
        "showroom": "1103-RABWA MALL",
        "showroomDetails": [
            {
                "name": "1103-RABWA MALL",
                "codes": [
                    "1103-C",
                    "1103-E"
                ]
            }
        ],
        "addressBooks": "1103-C;1103-E"
    },
    {
        "employeeId": "4581-نجاه عارضي",
        "personnelNumber": "4581",
        "name": "نجاه عارضي",
        "startDate": "2025-05-11",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4541-نجود الشهري",
        "personnelNumber": "4541",
        "name": "نجود الشهري",
        "startDate": "2025-03-10",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4543-Ahlam Mohammed Alsha",
        "personnelNumber": "4543",
        "name": "Ahlam Mohammed Alsha",
        "startDate": "2025-03-10",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "4546-احمد يوسف",
        "personnelNumber": "4546",
        "name": "احمد يوسف",
        "startDate": "2025-03-11",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E"
    },
    {
        "employeeId": "4534-هاجر العلوني",
        "personnelNumber": "4534",
        "name": "هاجر العلوني",
        "startDate": "2025-03-08",
        "manager": "خليل الصانع",
        "showroom": "1501-DANA MALL",
        "showroomDetails": [
            {
                "name": "1501-DANA MALL",
                "codes": [
                    "1501-C",
                    "1501-E"
                ]
            }
        ],
        "addressBooks": "1501-C;1501-E"
    },
    {
        "employeeId": "4538-وجدان الغامدي",
        "personnelNumber": "4538",
        "name": "وجدان الغامدي",
        "startDate": "2025-03-08",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4539-ضي عبدالله",
        "personnelNumber": "4539",
        "name": "ضي عبدالله",
        "startDate": "2025-03-08",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "4498-Sarah Mershed AlKham",
        "personnelNumber": "4498",
        "name": "Sarah Mershed AlKham",
        "startDate": "2025-02-11",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4483-نجوم العامري",
        "personnelNumber": "4483",
        "name": "نجوم العامري",
        "startDate": "2025-02-08",
        "manager": "عبيدة السباعي",
        "showroom": "1012-SAUQ7 CENTER",
        "showroomDetails": [
            {
                "name": "1012-SAUQ7 CENTER",
                "codes": [
                    "1012-C",
                    "1012-E"
                ]
            }
        ],
        "addressBooks": "1012-C;1012-E"
    },
    {
        "employeeId": "4605-منار القرني",
        "personnelNumber": "4605",
        "name": "منار القرني",
        "startDate": "2025-06-11",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "4637-منير عشق القحطاني",
        "personnelNumber": "4637",
        "name": "منير عشق القحطاني",
        "startDate": "2025-07-02",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "4624-ملاك صالح الغامدي",
        "personnelNumber": "4624",
        "name": "ملاك صالح الغامدي",
        "startDate": "2025-07-01",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4626-اريام خالد الزهراني",
        "personnelNumber": "4626",
        "name": "اريام خالد الزهراني",
        "startDate": "2025-07-01",
        "manager": "اماني عسيري",
        "showroom": "1904-BAHA MALL",
        "showroomDetails": [
            {
                "name": "1904-BAHA MALL",
                "codes": [
                    "1904-C",
                    "1904-E"
                ]
            }
        ],
        "addressBooks": "1904-C;1904-E"
    },
    {
        "employeeId": "4630-شدى يحي عسيري",
        "personnelNumber": "4630",
        "name": "شدى يحي عسيري",
        "startDate": "2025-07-01",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E"
    },
    {
        "employeeId": "4635-عائشه محمد البركاتي",
        "personnelNumber": "4635",
        "name": "عائشه محمد البركاتي",
        "startDate": "2025-07-01",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4640-وفاء فرج عبسي",
        "personnelNumber": "4640",
        "name": "وفاء فرج عبسي",
        "startDate": "2025-07-06",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4645-خالد محمد النهاري",
        "personnelNumber": "4645",
        "name": "خالد محمد النهاري",
        "startDate": "2025-07-08",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "4649-شروق نواف العنزي",
        "personnelNumber": "4649",
        "name": "شروق نواف العنزي",
        "startDate": "2025-07-21",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4651-اماني سعد المالكي",
        "personnelNumber": "4651",
        "name": "اماني سعد المالكي",
        "startDate": "2025-07-21",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "4661-فاطمه معدى البيشي",
        "personnelNumber": "4661",
        "name": "فاطمه معدى البيشي",
        "startDate": "2025-07-31",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "4668-جميله محمد سفياني",
        "personnelNumber": "4668",
        "name": "جميله محمد سفياني",
        "startDate": "2025-08-12",
        "manager": "عبدالله السرداح",
        "showroom": "1105-TALA MALL",
        "showroomDetails": [
            {
                "name": "1105-TALA MALL",
                "codes": [
                    "1105-C",
                    "1105-E"
                ]
            }
        ],
        "addressBooks": "1105-C;1105-E"
    },
    {
        "employeeId": "4674-أمواج علي قحل",
        "personnelNumber": "4674",
        "name": "أمواج علي قحل",
        "startDate": "2025-08-18",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "4663-رحمه احمد القرني",
        "personnelNumber": "4663",
        "name": "رحمه احمد القرني",
        "startDate": "2025-08-05",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E"
    },
    {
        "employeeId": "4673-رويده سالم الحربي",
        "personnelNumber": "4673",
        "name": "رويده سالم الحربي",
        "startDate": "2025-08-18",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "4670-سلمى علي مجرشي",
        "personnelNumber": "4670",
        "name": "سلمى علي مجرشي",
        "startDate": "2025-08-13",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4664-نجد درزى الحربي",
        "personnelNumber": "4664",
        "name": "نجد درزى الحربي",
        "startDate": "2025-08-06",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4662-شهد حمدان العامري",
        "personnelNumber": "4662",
        "name": "شهد حمدان العامري",
        "startDate": "2025-08-03",
        "manager": "جهاد ايوبي",
        "showroom": "1602-EHSA MALL",
        "showroomDetails": [
            {
                "name": "1602-EHSA MALL",
                "codes": [
                    "1602-C",
                    "1602-E"
                ]
            }
        ],
        "addressBooks": "1602-C;1602-E"
    },
    {
        "employeeId": "4678-عبدالفتاح محمد هيثم",
        "personnelNumber": "4678",
        "name": "عبدالفتاح محمد هيثم",
        "startDate": "2025-08-28",
        "manager": "عبد الجليل الحبال",
        "showroom": "1112-MEEM PLAZA CENTER",
        "showroomDetails": [
            {
                "name": "1112-MEEM PLAZA CENTER",
                "codes": [
                    "1112-C",
                    "1112-E"
                ]
            }
        ],
        "addressBooks": "1112-C;1112-E"
    },
    {
        "employeeId": "4707-ايوب علي كونجو علي ك",
        "personnelNumber": "4707",
        "name": "ايوب علي كونجو علي ك",
        "startDate": "2025-09-26",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "4681-جنى علي الشمراني",
        "personnelNumber": "4681",
        "name": "جنى علي الشمراني",
        "startDate": "2025-09-02",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4703-منى عبدالمحسن الزهرا",
        "personnelNumber": "4703",
        "name": "منى عبدالمحسن الزهرا",
        "startDate": "2025-09-16",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "4701-فاطمه حسين المويل",
        "personnelNumber": "4701",
        "name": "فاطمه حسين المويل",
        "startDate": "2025-09-14",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4682-ريوف محمد الحارثي",
        "personnelNumber": "4682",
        "name": "ريوف محمد الحارثي",
        "startDate": "2025-09-02",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4684-عريب فرج القحطاني",
        "personnelNumber": "4684",
        "name": "عريب فرج القحطاني",
        "startDate": "2025-09-03",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "4689-رنا سعد العنزي",
        "personnelNumber": "4689",
        "name": "رنا سعد العنزي",
        "startDate": "2025-09-09",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "4706-رهف عمر الزهراني",
        "personnelNumber": "4706",
        "name": "رهف عمر الزهراني",
        "startDate": "2025-09-17",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "4683-حنين ناصر باسلوم",
        "personnelNumber": "4683",
        "name": "حنين ناصر باسلوم",
        "startDate": "2025-09-03",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4696-اصاله عزيز القرني",
        "personnelNumber": "4696",
        "name": "اصاله عزيز القرني",
        "startDate": "2025-09-11",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4705-مراد محمد مباركي",
        "personnelNumber": "4705",
        "name": "مراد محمد مباركي",
        "startDate": "2025-09-17",
        "manager": "عبد الجليل الحبال",
        "showroom": "1112-MEEM PLAZA CENTER",
        "showroomDetails": [
            {
                "name": "1112-MEEM PLAZA CENTER",
                "codes": [
                    "1112-C",
                    "1112-E"
                ]
            }
        ],
        "addressBooks": "1112-C;1112-E"
    },
    {
        "employeeId": "4692-محمد سلمان كوناتشالي",
        "personnelNumber": "4692",
        "name": "محمد سلمان كوناتشالي",
        "startDate": "2025-09-10",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4723-سماهر علي",
        "personnelNumber": "4723",
        "name": "سماهر علي",
        "startDate": "2025-10-08",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4726-فاطمة القرني",
        "personnelNumber": "4726",
        "name": "فاطمة القرني",
        "startDate": "2009-10-09",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4725-مياسة مروان",
        "personnelNumber": "4725",
        "name": "مياسة مروان",
        "startDate": "2025-10-09",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4722-الاء العمري",
        "personnelNumber": "4722",
        "name": "الاء العمري",
        "startDate": "2025-10-08",
        "manager": "عبيدة السباعي",
        "showroom": "1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1005-C;1005-E"
    },
    {
        "employeeId": "4741-رنا محمد الاسمري",
        "personnelNumber": "4741",
        "name": "رنا محمد الاسمري",
        "startDate": "2025-10-20",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL و 1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            },
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E;1906-C;1906-E"
    },
    {
        "employeeId": "4745-اثير بندر السبيعي",
        "personnelNumber": "4745",
        "name": "اثير بندر السبيعي",
        "startDate": "2025-10-23",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4734-مهند محمد ال مرعي",
        "personnelNumber": "4734",
        "name": "مهند محمد ال مرعي",
        "startDate": "2025-10-15",
        "manager": "عبدالله السرداح",
        "showroom": "1105-TALA MALL و 1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1105-TALA MALL",
                "codes": [
                    "1105-C",
                    "1105-E"
                ]
            },
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1105-C;1105-E;1109-C;1109-E"
    },
    {
        "employeeId": "4715-ندى القرني",
        "personnelNumber": "4715",
        "name": "ندى القرني",
        "startDate": "2025-10-07",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL و 1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            },
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E;1011-C;1011-E"
    },
    {
        "employeeId": "4718-محمود اسماعيل الرفاع",
        "personnelNumber": "4718",
        "name": "محمود اسماعيل الرفاع",
        "startDate": "2025-10-07",
        "manager": "عبيدة السباعي",
        "showroom": "1012-SAUQ7 CENTER",
        "showroomDetails": [
            {
                "name": "1012-SAUQ7 CENTER",
                "codes": [
                    "1012-C",
                    "1012-E"
                ]
            }
        ],
        "addressBooks": "1012-C;1012-E"
    },
    {
        "employeeId": "4768-فتون محبوب",
        "personnelNumber": "4768",
        "name": "فتون محبوب",
        "startDate": "2025-11-15",
        "manager": "شريفة العمري",
        "showroom": "1011- AZIZ MALL",
        "showroomDetails": [
            {
                "name": "1011- AZIZ MALL",
                "codes": [
                    "1011-C",
                    "1011-E"
                ]
            }
        ],
        "addressBooks": "1011-C;1011-E"
    },
    {
        "employeeId": "4728-ارون بابو",
        "personnelNumber": "4728",
        "name": "ارون بابو",
        "startDate": "2025-10-13",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4752-خديجة مجش",
        "personnelNumber": "4752",
        "name": "خديجة مجش",
        "startDate": "2025-11-04",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "4750-Maha Alamri",
        "personnelNumber": "4750",
        "name": "Maha Alamri",
        "startDate": "2025-12-07",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "1851-Marwa Alshalan",
        "personnelNumber": "1851",
        "name": "Marwa Alshalan",
        "startDate": "2025-12-08",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4776-Athari Alqahtani",
        "personnelNumber": "4776",
        "name": "Athari Alqahtani",
        "startDate": "2025-12-08",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "1850-Fadwa Aldousari",
        "personnelNumber": "1850",
        "name": "Fadwa Aldousari",
        "startDate": "2025-12-08",
        "manager": "جهاد ايوبي",
        "showroom": "2103-DAREEN MALL",
        "showroomDetails": [
            {
                "name": "2103-DAREEN MALL",
                "codes": [
                    "2103-C",
                    "2103-E"
                ]
            }
        ],
        "addressBooks": "2103-C;2103-E"
    },
    {
        "employeeId": "4762-رهف الحربي",
        "personnelNumber": "4762",
        "name": "رهف الحربي",
        "startDate": "2025-12-10",
        "manager": "خليل الصانع",
        "showroom": "1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1402-C;1402-E"
    },
    {
        "employeeId": "4773-Nuha Alhamdan",
        "personnelNumber": "4773",
        "name": "Nuha Alhamdan",
        "startDate": "2025-12-10",
        "manager": "عبد الجليل الحبال",
        "showroom": "1103-RABWA MALL",
        "showroomDetails": [
            {
                "name": "1103-RABWA MALL",
                "codes": [
                    "1103-C",
                    "1103-E"
                ]
            }
        ],
        "addressBooks": "1103-C;1103-E"
    },
    {
        "employeeId": "4736-يارا الزهراني",
        "personnelNumber": "4736",
        "name": "يارا الزهراني",
        "startDate": "2025-12-10",
        "manager": "محمدكلو",
        "showroom": "1106-ATYAF MALL",
        "showroomDetails": [
            {
                "name": "1106-ATYAF MALL",
                "codes": [
                    "1106-C",
                    "1106-E"
                ]
            }
        ],
        "addressBooks": "1106-C;1106-E"
    },
    {
        "employeeId": "4777-Mataa Alotaibi",
        "personnelNumber": "4777",
        "name": "Mataa Alotaibi",
        "startDate": "2025-12-14",
        "manager": "منطقة الطائف",
        "showroom": "1301-JOURI MALL",
        "showroomDetails": [
            {
                "name": "1301-JOURI MALL",
                "codes": [
                    "1301-C",
                    "1301-E"
                ]
            }
        ],
        "addressBooks": "1301-C;1301-E"
    },
    {
        "employeeId": "4767-Noura Alhamdan",
        "personnelNumber": "4767",
        "name": "Noura Alhamdan",
        "startDate": "2025-12-14",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4738-Hessa Fahed",
        "personnelNumber": "4738",
        "name": "Hessa Fahed",
        "startDate": "2025-12-14",
        "manager": "محمدكلو",
        "showroom": "1107-RIYADH PARK MALL",
        "showroomDetails": [
            {
                "name": "1107-RIYADH PARK MALL",
                "codes": [
                    "1107-C",
                    "1107-E"
                ]
            }
        ],
        "addressBooks": "1107-C;1107-E"
    },
    {
        "employeeId": "4746-Maram Muhsen",
        "personnelNumber": "4746",
        "name": "Maram Muhsen",
        "startDate": "2025-12-14",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "4744-Ibtehaj Alsobhie",
        "personnelNumber": "4744",
        "name": "Ibtehaj Alsobhie",
        "startDate": "2025-12-14",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E"
    },
    {
        "employeeId": "4781-Nawal Fahad",
        "personnelNumber": "4781",
        "name": "Nawal Fahad",
        "startDate": "2025-12-14",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E"
    },
    {
        "employeeId": "4784-Amal Hamdan Almalki",
        "personnelNumber": "4784",
        "name": "Amal Hamdan Almalki",
        "startDate": "2025-12-15",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4761-اريام الاسمري",
        "personnelNumber": "4761",
        "name": "اريام الاسمري",
        "startDate": "2025-12-15",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL و 1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            },
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E;1906-C;1906-E"
    },
    {
        "employeeId": "4785-Areej Alaklbi",
        "personnelNumber": "4785",
        "name": "Areej Alaklbi",
        "startDate": "2025-12-16",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "4769-Sara Saleh",
        "personnelNumber": "4769",
        "name": "Sara Saleh",
        "startDate": "2025-12-17",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "4789-عبير القرني",
        "personnelNumber": "4789",
        "name": "عبير القرني",
        "startDate": "2025-12-18",
        "manager": "منطقة الطائف",
        "showroom": "1302-KAMAL CENTER",
        "showroomDetails": [
            {
                "name": "1302-KAMAL CENTER",
                "codes": [
                    "1302-C",
                    "1302-E"
                ]
            }
        ],
        "addressBooks": "1302-C;1302-E"
    },
    {
        "employeeId": "4787-عهد الغامدي",
        "personnelNumber": "4787",
        "name": "عهد الغامدي",
        "startDate": "2025-12-19",
        "manager": "اماني عسيري",
        "showroom": "1904-BAHA MALL",
        "showroomDetails": [
            {
                "name": "1904-BAHA MALL",
                "codes": [
                    "1904-C",
                    "1904-E"
                ]
            }
        ],
        "addressBooks": "1904-C;1904-E"
    },
    {
        "employeeId": "4786-Reham Aljadaani",
        "personnelNumber": "4786",
        "name": "Reham Aljadaani",
        "startDate": "2025-12-21",
        "manager": "عبيدة السباعي",
        "showroom": "1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1005-C;1005-E"
    },
    {
        "employeeId": "4793-Alhanoof Moslim",
        "personnelNumber": "4793",
        "name": "Alhanoof Moslim",
        "startDate": "2025-12-21",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    },
    {
        "employeeId": "4794-Sara Alghanam",
        "personnelNumber": "4794",
        "name": "Sara Alghanam",
        "startDate": "2025-12-21",
        "manager": "محمدكلو",
        "showroom": "1106-ATYAF MALL",
        "showroomDetails": [
            {
                "name": "1106-ATYAF MALL",
                "codes": [
                    "1106-C",
                    "1106-E"
                ]
            }
        ],
        "addressBooks": "1106-C;1106-E"
    },
    {
        "employeeId": "4788-Arada Asiri",
        "personnelNumber": "4788",
        "name": "Arada Asiri",
        "startDate": "2025-12-20",
        "manager": "عبيدة السباعي",
        "showroom": "1001-ANDALOS MALL",
        "showroomDetails": [
            {
                "name": "1001-ANDALOS MALL",
                "codes": [
                    "1001-C",
                    "1001-E"
                ]
            }
        ],
        "addressBooks": "1001-C;1001-E"
    },
    {
        "employeeId": "4795-Shog Alyobe",
        "personnelNumber": "4795",
        "name": "Shog Alyobe",
        "startDate": "2025-12-23",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "4691-محمد باسيل",
        "personnelNumber": "4691",
        "name": "محمد باسيل",
        "startDate": "2025-12-31",
        "manager": "عبد الجليل الحبال",
        "showroom": "1103-RABWA MALL",
        "showroomDetails": [
            {
                "name": "1103-RABWA MALL",
                "codes": [
                    "1103-C",
                    "1103-E"
                ]
            }
        ],
        "addressBooks": "1103-C;1103-E"
    },
    {
        "employeeId": "4796-أسماء ضيف الله",
        "personnelNumber": "4796",
        "name": "أسماء ضيف الله",
        "startDate": "2026-01-03",
        "manager": "عبيدة السباعي",
        "showroom": "1005-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1005-SALAM MALL",
                "codes": [
                    "1005-C",
                    "1005-E"
                ]
            }
        ],
        "addressBooks": "1005-C;1005-E"
    },
    {
        "employeeId": "4799-ضحى حسن",
        "personnelNumber": "4799",
        "name": "ضحى حسن",
        "startDate": "2026-01-03",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "4803-نوال عويضة",
        "personnelNumber": "4803",
        "name": "نوال عويضة",
        "startDate": "2026-01-03",
        "manager": "عبد الجليل الحبال",
        "showroom": "1102-OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1102-OTHAIM MALL",
                "codes": [
                    "1102-C",
                    "1102-E"
                ]
            }
        ],
        "addressBooks": "1102-C;1102-E"
    },
    {
        "employeeId": "4805-رزان ناصر",
        "personnelNumber": "4805",
        "name": "رزان ناصر",
        "startDate": "2026-01-03",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "4806-رنا العمري",
        "personnelNumber": "4806",
        "name": "رنا العمري",
        "startDate": "2026-01-03",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "4807-اثير الخالدي",
        "personnelNumber": "4807",
        "name": "اثير الخالدي",
        "startDate": "2026-01-03",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4809-بشاير عاطف",
        "personnelNumber": "4809",
        "name": "بشاير عاطف",
        "startDate": "2026-01-04",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "4811-Wafaa Alyami",
        "personnelNumber": "4811",
        "name": "Wafaa Alyami",
        "startDate": "2026-01-05",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "4812-ريهام رغفاوي",
        "personnelNumber": "4812",
        "name": "ريهام رغفاوي",
        "startDate": "2026-01-05",
        "manager": "عبدالله السرداح",
        "showroom": "1109-HAYAT MALL",
        "showroomDetails": [
            {
                "name": "1109-HAYAT MALL",
                "codes": [
                    "1109-C",
                    "1109-E"
                ]
            }
        ],
        "addressBooks": "1109-C;1109-E"
    },
    {
        "employeeId": "4813-Ghaym Ibrahim Taqie",
        "personnelNumber": "4813",
        "name": "Ghaym Ibrahim Taqie",
        "startDate": "2026-01-07",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "4815-ساره الحارثي",
        "personnelNumber": "4815",
        "name": "ساره الحارثي",
        "startDate": "2026-01-10",
        "manager": "محمدكلو",
        "showroom": "1115-Alrabie Mall",
        "showroomDetails": [
            {
                "name": "1115-Alrabie Mall",
                "codes": [
                    "1115-C",
                    "1115-E"
                ]
            }
        ],
        "addressBooks": "1115-C;1115-E"
    },
    {
        "employeeId": "4818-عائشة ناصر",
        "personnelNumber": "4818",
        "name": "عائشة ناصر",
        "startDate": "2026-01-10",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "4820-غزلان فيصل",
        "personnelNumber": "4820",
        "name": "غزلان فيصل",
        "startDate": "2026-01-13",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4821-اميره عبيد",
        "personnelNumber": "4821",
        "name": "اميره عبيد",
        "startDate": "2026-01-13",
        "manager": "جهاد ايوبي",
        "showroom": "2101-DHAHRAN MALL",
        "showroomDetails": [
            {
                "name": "2101-DHAHRAN MALL",
                "codes": [
                    "2101-C",
                    "2101-E"
                ]
            }
        ],
        "addressBooks": "2101-C;2101-E"
    },
    {
        "employeeId": "4822-سمية عماد",
        "personnelNumber": "4822",
        "name": "سمية عماد",
        "startDate": "2026-01-13",
        "manager": "محمدكلو",
        "showroom": "1101-HAMRA MALL",
        "showroomDetails": [
            {
                "name": "1101-HAMRA MALL",
                "codes": [
                    "1101-C",
                    "1101-E"
                ]
            }
        ],
        "addressBooks": "1101-C;1101-E"
    },
    {
        "employeeId": "4825-ربا الحربي",
        "personnelNumber": "4825",
        "name": "ربا الحربي",
        "startDate": "2026-01-17",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4824-جمانه جمال",
        "personnelNumber": "4824",
        "name": "جمانه جمال",
        "startDate": "2026-01-17",
        "manager": "جهاد ايوبي",
        "showroom": "2102-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "2102-NAKHEEL MALL",
                "codes": [
                    "2102-C",
                    "2102-E"
                ]
            }
        ],
        "addressBooks": "2102-C;2102-E"
    },
    {
        "employeeId": "4826-Mohammad Sanjd",
        "personnelNumber": "4826",
        "name": "Mohammad Sanjd",
        "startDate": "2026-01-19",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4828-مريم الحربي",
        "personnelNumber": "4828",
        "name": "مريم الحربي",
        "startDate": "2026-01-19",
        "manager": "خليل الصانع",
        "showroom": "1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1402-C;1402-E"
    },
    {
        "employeeId": "4830-Renam Alsharani",
        "personnelNumber": "4830",
        "name": "Renam Alsharani",
        "startDate": "2026-01-19",
        "manager": "اماني عسيري",
        "showroom": "1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1906-C;1906-E"
    },
    {
        "employeeId": "4832-اشواق الحربي",
        "personnelNumber": "4832",
        "name": "اشواق الحربي",
        "startDate": "2026-01-19",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4833-احلام عسيري",
        "personnelNumber": "4833",
        "name": "احلام عسيري",
        "startDate": "2026-01-21",
        "manager": "اماني عسيري",
        "showroom": "1901-RASHID MALL و 1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1901-RASHID MALL",
                "codes": [
                    "1901-C",
                    "1901-E"
                ]
            },
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1901-C;1901-E;1906-C;1906-E"
    },
    {
        "employeeId": "4834-لمياء عاتي",
        "personnelNumber": "4834",
        "name": "لمياء عاتي",
        "startDate": "2026-01-20",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E"
    },
    {
        "employeeId": "4835-بشاير الشهراني",
        "personnelNumber": "4835",
        "name": "بشاير الشهراني",
        "startDate": "2026-01-21",
        "manager": "جهاد ايوبي",
        "showroom": "2201-JUBAIL MALL",
        "showroomDetails": [
            {
                "name": "2201-JUBAIL MALL",
                "codes": [
                    "2201-C",
                    "2201-E"
                ]
            }
        ],
        "addressBooks": "2201-C;2201-E"
    },
    {
        "employeeId": "4836-شهد الدوسري",
        "personnelNumber": "4836",
        "name": "شهد الدوسري",
        "startDate": "2026-01-21",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4839-منال طاهر",
        "personnelNumber": "4839",
        "name": "منال طاهر",
        "startDate": "2026-01-26",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4840-ريناد الدوسري",
        "personnelNumber": "4840",
        "name": "ريناد الدوسري",
        "startDate": "2026-01-26",
        "manager": "محمدكلو",
        "showroom": "1107-RIYADH PARK MALL",
        "showroomDetails": [
            {
                "name": "1107-RIYADH PARK MALL",
                "codes": [
                    "1107-C",
                    "1107-E"
                ]
            }
        ],
        "addressBooks": "1107-C;1107-E"
    },
    {
        "employeeId": "4841-احلام دحمان",
        "personnelNumber": "4841",
        "name": "احلام دحمان",
        "startDate": "2026-01-31",
        "manager": "شريفة العمري",
        "showroom": "1004-ARAB MALL",
        "showroomDetails": [
            {
                "name": "1004-ARAB MALL",
                "codes": [
                    "1004-C",
                    "1004-E"
                ]
            }
        ],
        "addressBooks": "1004-C;1004-E"
    },
    {
        "employeeId": "4842-راويه احمد المطيري",
        "personnelNumber": "4842",
        "name": "راويه احمد المطيري",
        "startDate": "2026-01-31",
        "manager": "عبد الجليل الحبال",
        "showroom": "1103-RABWA MALL",
        "showroomDetails": [
            {
                "name": "1103-RABWA MALL",
                "codes": [
                    "1103-C",
                    "1103-E"
                ]
            }
        ],
        "addressBooks": "1103-C;1103-E"
    },
    {
        "employeeId": "4843-شروق الاحمري",
        "personnelNumber": "4843",
        "name": "شروق الاحمري",
        "startDate": "2026-01-31",
        "manager": "اماني عسيري",
        "showroom": "1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1906-C;1906-E"
    },
    {
        "employeeId": "4857-العنود العوفي",
        "personnelNumber": "4857",
        "name": "العنود العوفي",
        "startDate": "2026-02-07",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E"
    },
    {
        "employeeId": "4858-نوال الشمري",
        "personnelNumber": "4858",
        "name": "نوال الشمري",
        "startDate": "2026-02-07",
        "manager": "محمدكلو",
        "showroom": "1106-ATYAF MALL",
        "showroomDetails": [
            {
                "name": "1106-ATYAF MALL",
                "codes": [
                    "1106-C",
                    "1106-E"
                ]
            }
        ],
        "addressBooks": "1106-C;1106-E"
    },
    {
        "employeeId": "4859-ليلى الشهري",
        "personnelNumber": "4859",
        "name": "ليلى الشهري",
        "startDate": "2026-02-07",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4860-مشعل عسيري",
        "personnelNumber": "4860",
        "name": "مشعل عسيري",
        "startDate": "2026-02-07",
        "manager": "اماني عسيري",
        "showroom": "1903-MUJAN PARK MALL و 1906-LAVANDA PARK",
        "showroomDetails": [
            {
                "name": "1903-MUJAN PARK MALL",
                "codes": [
                    "1903-C",
                    "1903-E"
                ]
            },
            {
                "name": "1906-LAVANDA PARK",
                "codes": [
                    "1906-C",
                    "1906-E"
                ]
            }
        ],
        "addressBooks": "1903-C;1903-E;1906-C;1906-E"
    },
    {
        "employeeId": "4861-منيره العنزي",
        "personnelNumber": "4861",
        "name": "منيره العنزي",
        "startDate": "2026-02-07",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4862-عبد الرحمن طوخي",
        "personnelNumber": "4862",
        "name": "عبد الرحمن طوخي",
        "startDate": "2026-02-07",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4863-انس عصام",
        "personnelNumber": "4863",
        "name": "انس عصام",
        "startDate": "2026-02-07",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4855-مضر علوش",
        "personnelNumber": "4855",
        "name": "مضر علوش",
        "startDate": "2026-02-08",
        "manager": "محمدكلو",
        "showroom": "1115-Alrabie Mall",
        "showroomDetails": [
            {
                "name": "1115-Alrabie Mall",
                "codes": [
                    "1115-C",
                    "1115-E"
                ]
            }
        ],
        "addressBooks": "1115-C;1115-E"
    },
    {
        "employeeId": "4864-شذا السلمي",
        "personnelNumber": "4864",
        "name": "شذا السلمي",
        "startDate": "2026-02-09",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4865-وسايم الخليفي",
        "personnelNumber": "4865",
        "name": "وسايم الخليفي",
        "startDate": "2026-02-09",
        "manager": "جهاد ايوبي",
        "showroom": "2201-JUBAIL MALL",
        "showroomDetails": [
            {
                "name": "2201-JUBAIL MALL",
                "codes": [
                    "2201-C",
                    "2201-E"
                ]
            }
        ],
        "addressBooks": "2201-C;2201-E"
    },
    {
        "employeeId": "4866-خلود الجعفري",
        "personnelNumber": "4866",
        "name": "خلود الجعفري",
        "startDate": "2026-02-09",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4867-ريم الشريف",
        "personnelNumber": "4867",
        "name": "ريم الشريف",
        "startDate": "2026-02-09",
        "manager": "خليل الصانع",
        "showroom": "1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1402-C;1402-E"
    },
    {
        "employeeId": "4852-نوف الغامدي",
        "personnelNumber": "4852",
        "name": "نوف الغامدي",
        "startDate": "2026-02-10",
        "manager": "عبدالله السرداح",
        "showroom": "1105-TALA MALL",
        "showroomDetails": [
            {
                "name": "1105-TALA MALL",
                "codes": [
                    "1105-C",
                    "1105-E"
                ]
            }
        ],
        "addressBooks": "1105-C;1105-E"
    },
    {
        "employeeId": "4755-شهير عبدالله",
        "personnelNumber": "4755",
        "name": "شهير عبدالله",
        "startDate": "2026-02-10",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4868-ريماس الرحيلي",
        "personnelNumber": "4868",
        "name": "ريماس الرحيلي",
        "startDate": "2026-02-10",
        "manager": "خليل الصانع",
        "showroom": "1401-ALIA MALL و 1402-NOOR MALL",
        "showroomDetails": [
            {
                "name": "1401-ALIA MALL",
                "codes": [
                    "1401-C",
                    "1401-E"
                ]
            },
            {
                "name": "1402-NOOR MALL",
                "codes": [
                    "1402-C",
                    "1402-E"
                ]
            }
        ],
        "addressBooks": "1401-C;1401-E;1402-C;1402-E"
    },
    {
        "employeeId": "4869-مرام الحربي",
        "personnelNumber": "4869",
        "name": "مرام الحربي",
        "startDate": "2026-02-10",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4874-ساره مبخوت",
        "personnelNumber": "4874",
        "name": "ساره مبخوت",
        "startDate": "2026-02-11",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4872-لجين الروقي",
        "personnelNumber": "4872",
        "name": "لجين الروقي",
        "startDate": "2026-02-11",
        "manager": "المنطقة الغربية",
        "showroom": "1006-YASMIN MALL و 1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1006-YASMIN MALL",
                "codes": [
                    "1006-C",
                    "1006-E"
                ]
            },
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1006-C;1006-E;1010-C;1010-E"
    },
    {
        "employeeId": "4873-فاطمة المرحبي",
        "personnelNumber": "4873",
        "name": "فاطمة المرحبي",
        "startDate": "2026-02-11",
        "manager": "المنطقة الغربية",
        "showroom": "1010-VILLAGE MALL",
        "showroomDetails": [
            {
                "name": "1010-VILLAGE MALL",
                "codes": [
                    "1010-C",
                    "1010-E"
                ]
            }
        ],
        "addressBooks": "1010-C;1010-E"
    },
    {
        "employeeId": "4845-نوير القحطاني",
        "personnelNumber": "4845",
        "name": "نوير القحطاني",
        "startDate": "2026-02-07",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "4853-روان الشيباني",
        "personnelNumber": "4853",
        "name": "روان الشيباني",
        "startDate": "2026-02-07",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "4854-محمد شهيم",
        "personnelNumber": "4854",
        "name": "محمد شهيم",
        "startDate": "2026-02-02",
        "manager": "محمدكلو",
        "showroom": "1114-Malgha Mall",
        "showroomDetails": [
            {
                "name": "1114-Malgha Mall",
                "codes": [
                    "1114-C",
                    "1114-E"
                ]
            }
        ],
        "addressBooks": "1114-C;1114-E"
    },
    {
        "employeeId": "4849-محمد انس",
        "personnelNumber": "4849",
        "name": "محمد انس",
        "startDate": "2026-02-02",
        "manager": "خليل الصانع",
        "showroom": "1701-ARAR OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1701-ARAR OTHAIM MALL",
                "codes": [
                    "1701-C",
                    "1701-E"
                ]
            }
        ],
        "addressBooks": "1701-C;1701-E"
    },
    {
        "employeeId": "4851-انشد اسلم",
        "personnelNumber": "4851",
        "name": "انشد اسلم",
        "startDate": "2026-02-02",
        "manager": "محمدكلو",
        "showroom": "1106-ATYAF MALL",
        "showroomDetails": [
            {
                "name": "1106-ATYAF MALL",
                "codes": [
                    "1106-C",
                    "1106-E"
                ]
            }
        ],
        "addressBooks": "1106-C;1106-E"
    },
    {
        "employeeId": "4876-وجدان العميري",
        "personnelNumber": "4876",
        "name": "وجدان العميري",
        "startDate": "2026-02-14",
        "manager": "عبد الجليل الحبال",
        "showroom": "1108-SALAM MALL",
        "showroomDetails": [
            {
                "name": "1108-SALAM MALL",
                "codes": [
                    "1108-C",
                    "1108-E"
                ]
            }
        ],
        "addressBooks": "1108-C;1108-E"
    },
    {
        "employeeId": "4877-نوره الحربي",
        "personnelNumber": "4877",
        "name": "نوره الحربي",
        "startDate": "2026-02-14",
        "manager": "عبدالله السرداح",
        "showroom": "2401-NAKHEEL PLAZA MALL",
        "showroomDetails": [
            {
                "name": "2401-NAKHEEL PLAZA MALL",
                "codes": [
                    "2401-C",
                    "2401-E"
                ]
            }
        ],
        "addressBooks": "2401-C;2401-E"
    },
    {
        "employeeId": "4878-تهاني الفقيه",
        "personnelNumber": "4878",
        "name": "تهاني الفقيه",
        "startDate": "2026-02-14",
        "manager": "محمدكلو",
        "showroom": "1113-PARK AVENUE MALL",
        "showroomDetails": [
            {
                "name": "1113-PARK AVENUE MALL",
                "codes": [
                    "1113-C",
                    "1113-E"
                ]
            }
        ],
        "addressBooks": "1113-C;1113-E"
    },
    {
        "employeeId": "4879-سعيدة الفهمي",
        "personnelNumber": "4879",
        "name": "سعيدة الفهمي",
        "startDate": "2026-02-15",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4880-وعد الزهراني",
        "personnelNumber": "4880",
        "name": "وعد الزهراني",
        "startDate": "2026-02-16",
        "manager": "المنطقة الغربية",
        "showroom": "1003-RED SEA MALL",
        "showroomDetails": [
            {
                "name": "1003-RED SEA MALL",
                "codes": [
                    "1003-C",
                    "1003-E"
                ]
            }
        ],
        "addressBooks": "1003-C;1003-E"
    },
    {
        "employeeId": "4881-عصام علي",
        "personnelNumber": "4881",
        "name": "عصام علي",
        "startDate": "2026-02-16",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4882-سديم الشهراني",
        "personnelNumber": "4882",
        "name": "سديم الشهراني",
        "startDate": "2026-02-16",
        "manager": "محمدكلو",
        "showroom": "1110- RIYADH GALLERY MALL",
        "showroomDetails": [
            {
                "name": "1110- RIYADH GALLERY MALL",
                "codes": [
                    "1110-C",
                    "1110-E"
                ]
            }
        ],
        "addressBooks": "1110-C;1110-E"
    },
    {
        "employeeId": "4883-خفره سعد الدوسري",
        "personnelNumber": "4883",
        "name": "خفره سعد الدوسري",
        "startDate": "2026-02-16",
        "manager": "محمدكلو",
        "showroom": "1111-KHALEEJ MALL",
        "showroomDetails": [
            {
                "name": "1111-KHALEEJ MALL",
                "codes": [
                    "1111-C",
                    "1111-E"
                ]
            }
        ],
        "addressBooks": "1111-C;1111-E"
    },
    {
        "employeeId": "4885-محمد اياد المغربل",
        "personnelNumber": "4885",
        "name": "محمد اياد المغربل",
        "startDate": "2026-02-18",
        "manager": "رضوان عطيوي",
        "showroom": "1203- JABL OMAR MALL",
        "showroomDetails": [
            {
                "name": "1203- JABL OMAR MALL",
                "codes": [
                    "1203-C",
                    "1203-E"
                ]
            }
        ],
        "addressBooks": "1203-C;1203-E"
    },
    {
        "employeeId": "4870-عبدالله شجاع الدوسري",
        "personnelNumber": "4870",
        "name": "عبدالله شجاع الدوسري",
        "startDate": "2026-02-22",
        "manager": "محمدكلو",
        "showroom": "1115-Alrabie Mall",
        "showroomDetails": [
            {
                "name": "1115-Alrabie Mall",
                "codes": [
                    "1115-C",
                    "1115-E"
                ]
            }
        ],
        "addressBooks": "1115-C;1115-E"
    },
    {
        "employeeId": "4886-زين العابدين العلوه",
        "personnelNumber": "4886",
        "name": "زين العابدين العلوه",
        "startDate": "2026-02-22",
        "manager": "محمدكلو",
        "showroom": "1114-Malgha Mall",
        "showroomDetails": [
            {
                "name": "1114-Malgha Mall",
                "codes": [
                    "1114-C",
                    "1114-E"
                ]
            }
        ],
        "addressBooks": "1114-C;1114-E"
    },
    {
        "employeeId": "4888-اماني الحسني",
        "personnelNumber": "4888",
        "name": "اماني الحسني",
        "startDate": "2026-02-25",
        "manager": "رضوان عطيوي",
        "showroom": "1202-SITTEN CENTER",
        "showroomDetails": [
            {
                "name": "1202-SITTEN CENTER",
                "codes": [
                    "1202-C",
                    "1202-E"
                ]
            }
        ],
        "addressBooks": "1202-C;1202-E"
    },
    {
        "employeeId": "4890-بلقيس الزهراني",
        "personnelNumber": "4890",
        "name": "بلقيس الزهراني",
        "startDate": "2026-02-25",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4871-نوره البيشي",
        "personnelNumber": "4871",
        "name": "نوره البيشي",
        "startDate": "2026-02-27",
        "manager": "محمدكلو",
        "showroom": "1104-NAKHEEL MALL",
        "showroomDetails": [
            {
                "name": "1104-NAKHEEL MALL",
                "codes": [
                    "1104-C",
                    "1104-E"
                ]
            }
        ],
        "addressBooks": "1104-C;1104-E"
    },
    {
        "employeeId": "4898-امل الجدعاني",
        "personnelNumber": "4898",
        "name": "امل الجدعاني",
        "startDate": "2026-02-28",
        "manager": "شريفة العمري",
        "showroom": "1002-HAIFA MALL",
        "showroomDetails": [
            {
                "name": "1002-HAIFA MALL",
                "codes": [
                    "1002-C",
                    "1002-E"
                ]
            }
        ],
        "addressBooks": "1002-C;1002-E"
    },
    {
        "employeeId": "4897-وفاء الشهري",
        "personnelNumber": "4897",
        "name": "وفاء الشهري",
        "startDate": "2026-02-28",
        "manager": "شريفة العمري",
        "showroom": "1008-JEDDAH PARK MALL",
        "showroomDetails": [
            {
                "name": "1008-JEDDAH PARK MALL",
                "codes": [
                    "1008-C",
                    "1008-E"
                ]
            }
        ],
        "addressBooks": "1008-C;1008-E"
    },
    {
        "employeeId": "4899-فارس محسن",
        "personnelNumber": "4899",
        "name": "فارس محسن",
        "startDate": "2026-02-28",
        "manager": "محمدكلو",
        "showroom": "1114-Malgha Mall",
        "showroomDetails": [
            {
                "name": "1114-Malgha Mall",
                "codes": [
                    "1114-C",
                    "1114-E"
                ]
            }
        ],
        "addressBooks": "1114-C;1114-E"
    },
    {
        "employeeId": "4900-ابتهال خليوي",
        "personnelNumber": "4900",
        "name": "ابتهال خليوي",
        "startDate": "2026-03-02",
        "manager": "عبدالله السرداح",
        "showroom": "1801-HAIL OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1801-HAIL OTHAIM MALL",
                "codes": [
                    "1801-C",
                    "1801-E"
                ]
            }
        ],
        "addressBooks": "1801-C;1801-E"
    },
    {
        "employeeId": "4887-مروة جمعه",
        "personnelNumber": "4887",
        "name": "مروة جمعه",
        "startDate": "2026-03-01",
        "manager": "جهاد ايوبي",
        "showroom": "1601-EHSA OTHAIM MALL",
        "showroomDetails": [
            {
                "name": "1601-EHSA OTHAIM MALL",
                "codes": [
                    "1601-C",
                    "1601-E"
                ]
            }
        ],
        "addressBooks": "1601-C;1601-E"
    },
    {
        "employeeId": "4926-محمد راشق",
        "personnelNumber": "4926",
        "name": "محمد راشق",
        "startDate": "2026-03-16",
        "manager": "رضوان عطيوي",
        "showroom": "1201-MAKKAH MALL",
        "showroomDetails": [
            {
                "name": "1201-MAKKAH MALL",
                "codes": [
                    "1201-C",
                    "1201-E"
                ]
            }
        ],
        "addressBooks": "1201-C;1201-E"
    },
    {
        "employeeId": "4846-محمد سلمان المسدي",
        "personnelNumber": "4846",
        "name": "محمد سلمان المسدي",
        "startDate": "2026-03-22",
        "manager": "عبيدة السباعي",
        "showroom": "1007-KHAYYAT CENTER",
        "showroomDetails": [
            {
                "name": "1007-KHAYYAT CENTER",
                "codes": [
                    "1007-C",
                    "1007-E"
                ]
            }
        ],
        "addressBooks": "1007-C;1007-E"
    },
    {
        "employeeId": "4916-شمسير اب",
        "personnelNumber": "4916",
        "name": "شمسير اب",
        "startDate": "2026-03-27",
        "manager": "خليل الصانع",
        "showroom": "2001-TAPUK PARK MALL",
        "showroomDetails": [
            {
                "name": "2001-TAPUK PARK MALL",
                "codes": [
                    "2001-C",
                    "2001-E"
                ]
            }
        ],
        "addressBooks": "2001-C;2001-E"
    }
];

const ALL_SHOWROOMS = [
    {
        "name": "1001-ANDALOS MALL",
        "codes": [
            "1001-C",
            "1001-E"
        ]
    },
    {
        "name": "1002-HAIFA MALL",
        "codes": [
            "1002-C",
            "1002-E"
        ]
    },
    {
        "name": "1003-RED SEA MALL",
        "codes": [
            "1003-C",
            "1003-E"
        ]
    },
    {
        "name": "1004-ARAB MALL",
        "codes": [
            "1004-C",
            "1004-E"
        ]
    },
    {
        "name": "1005-SALAM MALL",
        "codes": [
            "1005-C",
            "1005-E"
        ]
    },
    {
        "name": "1006-YASMIN MALL",
        "codes": [
            "1006-C",
            "1006-E"
        ]
    },
    {
        "name": "1007-KHAYYAT CENTER",
        "codes": [
            "1007-C",
            "1007-E"
        ]
    },
    {
        "name": "1008-JEDDAH PARK MALL",
        "codes": [
            "1008-C",
            "1008-E"
        ]
    },
    {
        "name": "1009-BASATEEN MALL",
        "codes": [
            "1009-C",
            "1009-E"
        ]
    },
    {
        "name": "1010-VILLAGE MALL",
        "codes": [
            "1010-C",
            "1010-E"
        ]
    },
    {
        "name": "1011- AZIZ MALL",
        "codes": [
            "1011-C",
            "1011-E"
        ]
    },
    {
        "name": "1012-SAUQ7 CENTER",
        "codes": [
            "1012-C",
            "1012-E"
        ]
    },
    {
        "name": "1101-HAMRA MALL",
        "codes": [
            "1101-C",
            "1101-E"
        ]
    },
    {
        "name": "1102-OTHAIM MALL",
        "codes": [
            "1102-C",
            "1102-E"
        ]
    },
    {
        "name": "1103-RABWA MALL",
        "codes": [
            "1103-C",
            "1103-E"
        ]
    },
    {
        "name": "1104-NAKHEEL MALL",
        "codes": [
            "1104-C",
            "1104-E"
        ]
    },
    {
        "name": "1105-TALA MALL",
        "codes": [
            "1105-C",
            "1105-E"
        ]
    },
    {
        "name": "1106-ATYAF MALL",
        "codes": [
            "1106-C",
            "1106-E"
        ]
    },
    {
        "name": "1107-RIYADH PARK MALL",
        "codes": [
            "1107-C",
            "1107-E"
        ]
    },
    {
        "name": "1108-SALAM MALL",
        "codes": [
            "1108-C",
            "1108-E"
        ]
    },
    {
        "name": "1109-HAYAT MALL",
        "codes": [
            "1109-C",
            "1109-E"
        ]
    },
    {
        "name": "1110- RIYADH GALLERY MALL",
        "codes": [
            "1110-C",
            "1110-E"
        ]
    },
    {
        "name": "1111-KHALEEJ MALL",
        "codes": [
            "1111-C",
            "1111-E"
        ]
    },
    {
        "name": "1112-MEEM PLAZA CENTER",
        "codes": [
            "1112-C",
            "1112-E"
        ]
    },
    {
        "name": "1113-PARK AVENUE MALL",
        "codes": [
            "1113-C",
            "1113-E"
        ]
    },
    {
        "name": "1114-Malgha Mall",
        "codes": [
            "1114-C",
            "1114-E"
        ]
    },
    {
        "name": "1115-Alrabie Mall",
        "codes": [
            "1115-C",
            "1115-E"
        ]
    },
    {
        "name": "1201-MAKKAH MALL",
        "codes": [
            "1201-C",
            "1201-E"
        ]
    },
    {
        "name": "1202-SITTEN CENTER",
        "codes": [
            "1202-C",
            "1202-E"
        ]
    },
    {
        "name": "1203- JABL OMAR MALL",
        "codes": [
            "1203-C",
            "1203-E"
        ]
    },
    {
        "name": "1301-JOURI MALL",
        "codes": [
            "1301-C",
            "1301-E"
        ]
    },
    {
        "name": "1302-KAMAL CENTER",
        "codes": [
            "1302-C",
            "1302-E"
        ]
    },
    {
        "name": "1401-ALIA MALL",
        "codes": [
            "1401-C",
            "1401-E"
        ]
    },
    {
        "name": "1402-NOOR MALL",
        "codes": [
            "1402-C",
            "1402-E"
        ]
    },
    {
        "name": "1501-DANA MALL",
        "codes": [
            "1501-C",
            "1501-E"
        ]
    },
    {
        "name": "1601-EHSA OTHAIM MALL",
        "codes": [
            "1601-C",
            "1601-E"
        ]
    },
    {
        "name": "1602-EHSA MALL",
        "codes": [
            "1602-C",
            "1602-E"
        ]
    },
    {
        "name": "1701-ARAR OTHAIM MALL",
        "codes": [
            "1701-C",
            "1701-E"
        ]
    },
    {
        "name": "1801-HAIL OTHAIM MALL",
        "codes": [
            "1801-E",
            "1801-C"
        ]
    },
    {
        "name": "1901-RASHID MALL",
        "codes": [
            "1901-C",
            "1901-E"
        ]
    },
    {
        "name": "1902-KHAMIS AVENUE",
        "codes": [
            "1902-C",
            "1902-E"
        ]
    },
    {
        "name": "1903-MUJAN PARK MALL",
        "codes": [
            "1903-C",
            "1903-E"
        ]
    },
    {
        "name": "1904-BAHA MALL",
        "codes": [
            "1904-C",
            "1904-E"
        ]
    },
    {
        "name": "1906-LAVANDA PARK",
        "codes": [
            "1906-C",
            "1906-E"
        ]
    },
    {
        "name": "2001-TAPUK PARK MALL",
        "codes": [
            "2001-C",
            "2001-E"
        ]
    },
    {
        "name": "2101-DHAHRAN MALL",
        "codes": [
            "2101-C",
            "2101-E"
        ]
    },
    {
        "name": "2102-NAKHEEL MALL",
        "codes": [
            "2102-C",
            "2102-E"
        ]
    },
    {
        "name": "2103-DAREEN MALL",
        "codes": [
            "2103-C",
            "2103-E"
        ]
    },
    {
        "name": "2201-JUBAIL MALL",
        "codes": [
            "2201-C",
            "2201-E"
        ]
    },
    {
        "name": "2301-JOUF MALL",
        "codes": [
            "2301-C",
            "2301-E"
        ]
    },
    {
        "name": "2401-NAKHEEL PLAZA MALL",
        "codes": [
            "2401-C",
            "2401-E"
        ]
    }
];
