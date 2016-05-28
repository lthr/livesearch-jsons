[{
  "accounts": [{
    "accountNumber": "18412099729",
    "totalMarketValue": 578950,
    "currency": "SEK",
    "hasMultipleOwners": false,
    "accountTypeSpecifications": {
      "id": "4001",
      "name": "Personkonto",
      "type": "BANK_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "ACCOUNT",
      "taxEnvironment": "PROFIT_TAX",
      "hasHoldings": true,
      "product": true,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "0000000113",
        "type": "Deposit",
        "name": "Kontanter",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/0000000113",
        "factor": 1
      },
      "position": {
        "quantity": 578950,
        "prices": [{
          "data": {"amount": {"amount": 1, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 578950, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 578950, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "1841 83 07595",
    "totalMarketValue": 0,
    "currency": "SEK",
    "hasMultipleOwners": false,
    "accountTypeSpecifications": {
      "id": "9441",
      "name": "Grupplivförsäkring",
      "type": "UNKNOWN",
      "category": "UNKNOWN",
      "subCategory": "UNKNOWN",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    }
  }, {
    "accountNumber": "WRAP_4430 33 65846",
    "totalMarketValue": 9040.1663202522,
    "currency": "SEK",
    "isWrapper": true,
    "hasMultipleOwners": false,
    "accountTypeSpecifications": {
      "id": "9481",
      "name": "Fondkapitalförsäkring Placera",
      "type": "ENDOWMENT_UNIT_LINK",
      "category": "PENSION",
      "subCategory": "CUSTODY",
      "taxEnvironment": "CAPITAL_INSURANCE_TAX",
      "hasHoldings": true,
      "product": true,
      "accountInstrument": false
    },
    "nestedAccounts": [{
      "accountNumber": "4430 33 65846",
      "totalMarketValue": 9040.1663202522,
      "currency": "SEK",
      "isProduct": false,
      "hasMultipleOwners": false,
      "accountTypeSpecifications": {
        "type": "UNKNOWN",
        "category": "UNKNOWN",
        "subCategory": "UNKNOWN",
        "hasHoldings": false,
        "product": false,
        "accountInstrument": false
      },
      "holdings": [{
        "instrument": {
          "isin": "IE00B4X39390",
          "type": "Investment fund",
          "name": "Wellington Emerging Local Debt",
          "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/IE00B4X39390",
          "price": {"amount": 73.4299, "currency": "SEK"},
          "factor": 1
        },
        "position": {
          "quantity": 123.112878,
          "prices": [{
            "data": {"amount": {"amount": 73.4299, "currency": "SEK"}, "source": "SIR", "order": 1},
            "marketValue": {"amount": 9040.1663202522, "currency": "SEK"},
            "marketValueInLocalCurrency": {"amount": 9040.1663202522, "currency": "SEK"}
          }, {
            "data": {"amount": {"amount": 90.717, "currency": "SEK"}, "source": "LEGACY", "order": 3},
            "marketValue": {"amount": 11168.43, "currency": "SEK"},
            "marketValueInLocalCurrency": {"amount": 11168.43, "currency": "SEK"}
          }]
        }
      }]
    }]
  }, {
    "accountNumber": "1509 83 01165",
    "totalMarketValue": 124473.75072913602,
    "currency": "SEK",
    "hasMultipleOwners": false,
    "accountTypeSpecifications": {
      "id": "9416",
      "name": "Nordea Individuell Tjänstepension Fond",
      "type": "PENSION",
      "category": "PENSION",
      "subCategory": "CUSTODY",
      "taxEnvironment": "CAPITAL_INSURANCE_TAX",
      "hasHoldings": false,
      "product": true,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "LU0169518387",
        "type": "Investment fund",
        "name": "JPMorgan Asia Equity A",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0169518387",
        "price": {"amount": 163.334, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 157.282671,
        "prices": [{
          "data": {"amount": {"amount": 163.334, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 25689.607785114, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 25689.607785114, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 2170.1647, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 341329.3, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 341329.3, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048996",
        "type": "Investment fund",
        "name": "Nordea Eastern Europe Fund",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/FI4000048996",
        "price": {"amount": 196.5273, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 72.023622,
        "prices": [{
          "data": {"amount": {"amount": 196.5273, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 14154.6079678806, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 14154.6079678806, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 173.2, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 12474.49, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 12474.49, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048988",
        "type": "Investment fund",
        "name": "Nordea Europe Fund",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/FI4000048988",
        "price": {"amount": 12705.4071, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 1.779624,
        "prices": [{
          "data": {"amount": {"amount": 12705.4071, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 22610.847404930402, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 22610.847404930402, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 495.9678, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 882.64, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 882.64, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000427775",
        "type": "Investment fund",
        "name": "Nordea Nordenfond",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/SE0000427775",
        "price": {"amount": 844.091, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 35.715401,
        "prices": [{
          "data": {"amount": {"amount": 844.091, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 30147.048545491, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 30147.048545491, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 119.2555, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 4259.26, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 4259.26, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0173922807",
        "type": "Investment fund",
        "name": "Nordea North American Value Fund",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0173922807",
        "price": {"amount": 369.72, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 86.204801,
        "prices": [{
          "data": {"amount": {"amount": 369.72, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 31871.639025720004, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 31871.639025720004, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 878.25, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 75709.37, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 75709.37, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "3273 30 38419",
    "totalMarketValue": 196598.1360727481,
    "currency": "SEK",
    "hasMultipleOwners": false,
    "accountTypeSpecifications": {
      "id": "9420",
      "name": "Ålderspension med fondförvaltning",
      "type": "PENSION",
      "category": "PENSION",
      "subCategory": "CUSTODY",
      "taxEnvironment": "SE_PENSION_PILLAR_III",
      "hasHoldings": true,
      "product": true,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "LU0234588027",
        "type": "Investment fund",
        "name": "Goldman Sachs US Equity Portfolio",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0234588027",
        "price": {"amount": 145.287, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 70.7058,
        "prices": [{
          "data": {"amount": {"amount": 145.287, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 10272.6335646, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 10272.6335646, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 9504.1024, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 671995.16, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 671995.16, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0341736642",
        "type": "Investment fund",
        "name": "ING European Health Care SICAV growth",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0341736642",
        "price": {"amount": 624.59, "currency": "EUR"},
        "factor": 1
      },
      "position": {
        "quantity": 1.979772,
        "prices": [{
          "data": {"amount": {"amount": 624.59, "currency": "EUR"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 1236.5457934800002, "currency": "EUR"},
          "marketValueInLocalCurrency": {"amount": 11458.96599833251, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 164.7683, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 326.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 326.2, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0326853826",
        "type": "Investment fund",
        "name": "Nordea European Opportunity Fund",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0326853826",
        "price": {"amount": 94.17, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 262.109793,
        "prices": [{
          "data": {"amount": {"amount": 94.17, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 24682.87920681, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 24682.87920681, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 281.8, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 73862.54, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 73862.54, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0087942271",
        "type": "Investment fund",
        "name": "Nordea European Small and Mid Cap",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0087942271",
        "price": {"amount": 5128.19, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 1.930814,
        "prices": [{
          "data": {"amount": {"amount": 5128.19, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 9901.58104666, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 9901.58104666, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 12310.8336, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 23769.93, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 23769.93, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0002591016",
        "type": "Investment fund",
        "name": "Nordea Indexfond Sverige ",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/SE0002591016",
        "price": {"amount": 196.6602, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 93.097028,
        "prices": [{
          "data": {"amount": {"amount": 196.6602, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 18308.480145885598, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 18308.480145885598, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 1.9534, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 181.86, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 181.86, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0772958442",
        "type": "Investment fund",
        "name": "Nordea North American All Cap Fund",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0772958442",
        "price": {"amount": 1281.79, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 7.683467,
        "prices": [{
          "data": {"amount": {"amount": 1281.79, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 9848.59116593, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 9848.59116593, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 362.94, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 2788.64, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 2788.64, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813365",
        "type": "Investment fund",
        "name": "Nordea Småbolagsfond Norden",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/FI0008813365",
        "price": {"amount": 92.842, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 117.042028,
        "prices": [{
          "data": {"amount": {"amount": 92.842, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 10866.415963576, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 10866.415963576, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 172.73, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 20216.67, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 20216.67, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0003653302",
        "type": "Investment fund",
        "name": "Nordea Småbolagsfond Sverige",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/SE0003653302",
        "price": {"amount": 221.4486, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 159.426428,
        "prices": [{
          "data": {"amount": {"amount": 221.4486, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 35304.7592836008, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 35304.7592836008, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 1112.67, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 177389, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 177389, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000625238",
        "type": "Investment fund",
        "name": "Nordea Swedish Stars icke-utd",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/SE0000625238",
        "price": {"amount": 2072.1476, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 17.748617,
        "prices": [{
          "data": {"amount": {"amount": 2072.1476, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 36777.7541198692, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 36777.7541198692, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 199.5227, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 3541.25, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 3541.25, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0198839143",
        "type": "Investment fund",
        "name": "UBS Small Caps Europe B",
        "ref": "http://sir.test.oneadr.net:8010/sir-rest/instruments/v1/instruments/LU0198839143",
        "price": {"amount": 2976.292, "currency": "SEK"},
        "factor": 1
      },
      "position": {
        "quantity": 9.802827,
        "prices": [{
          "data": {"amount": {"amount": 2976.292, "currency": "SEK"}, "source": "SIR", "order": 1},
          "marketValue": {"amount": 29176.075577484, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 29176.075577484, "currency": "SEK"}
        }, {
          "data": {"amount": {"amount": 155.6072, "currency": "SEK"}, "source": "LEGACY", "order": 3},
          "marketValue": {"amount": 1525.39, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1525.39, "currency": "SEK"}
        }]
      }
    }]
  }],
  "adapters": [{"name": "deposits", "time": 502, "failed": false}, {
    "name": "depots",
    "time": 658,
    "failed": false
  }, {"name": "loans", "time": 1877, "failed": false}, {
    "name": "serviceaccounts",
    "time": 2606,
    "failed": false
  }, {"name": "iskaccounts", "time": 1474, "failed": false}, {
    "name": "funds",
    "time": 681,
    "failed": false
  }, {"name": "insurances", "time": 1531, "failed": false}, {
    "name": "mortgages",
    "time": 1873,
    "failed": false
  }, {"name": "pensions", "time": 5528, "failed": false}],
  "_details": {"ENV": "AITE", "COUNTRY": "se", "CUSTOMER": "196804241419"}
}, {
  "accounts": [{
    "accountNumber": "18957288945",
    "totalMarketValue": 3596506.5100301495,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Kapitalförsäkring Depå",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "CH0012221716",
        "type": "Aktier",
        "name": "ABB LTD",
        "price": {"amount": 174, "currency": "SEK"}
      },
      "position": {
        "quantity": 191,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 174, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 33234, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 33234, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048988",
        "type": "Aktiefonder",
        "name": "Nordea Europe Fund",
        "price": {"amount": 12705.4071, "currency": "SEK"}
      },
      "position": {
        "quantity": 7.2736,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 12705.4071, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 92414.04908256, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 92414.04908256, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0602544602",
        "type": "Räntefonder",
        "name": "Nordea European High Yield Bond Fund II",
        "price": {"amount": 604.21, "currency": "SEK"}
      },
      "position": {
        "quantity": 147.7358,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 604.21, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 89263.447718, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 89263.447718, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000115446",
        "type": "Aktier",
        "name": "VOLVO B",
        "price": {"amount": 92.8, "currency": "SEK"}
      },
      "position": {
        "quantity": 379,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 92.8, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 35171.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 35171.2, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000114837",
        "type": "Aktier",
        "name": "TRELLEBORG B",
        "price": {"amount": 154.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 149,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 154.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 22960.9, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 22960.9, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813381",
        "type": "Aktiefonder",
        "name": "Nordea North America Fund",
        "price": {"amount": 134.13, "currency": "SEK"}
      },
      "position": {
        "quantity": 631.455,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 134.13, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 84697.05915, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 84697.05915, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813332",
        "type": "Aktiefonder",
        "name": "Nordea Global",
        "price": {"amount": 2.7798, "currency": "SEK"}
      },
      "position": {
        "quantity": 63861.2836,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 2.7798, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 177521.59615128, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 177521.59615128, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000382335",
        "type": "Aktier",
        "name": "AUTOLIV INC. SDB",
        "price": {"amount": 1015, "currency": "SEK"}
      },
      "position": {
        "quantity": 36,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1015, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 36540, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 36540, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813308",
        "type": "Aktiefonder",
        "name": "Nordea Kinafond",
        "price": {"amount": 155.2202, "currency": "SEK"}
      },
      "position": {
        "quantity": 477.28,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 155.2202, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 74083.497056, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 74083.497056, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0003087436",
        "type": "Räntefonder",
        "name": "Nordea Private Banking Ränteportfölj utd",
        "price": {"amount": 100.8393, "currency": "SEK"}
      },
      "position": {
        "quantity": 10059.7041,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.8393, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1014413.51965113, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1014413.51965113, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0458980835",
        "type": "Räntefonder",
        "name": "Nordea US Corp Bond (extern förvaltare)",
        "price": {"amount": 100.45, "currency": "SEK"}
      },
      "position": {
        "quantity": 834.6542,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.45, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 83841.01439, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 83841.01439, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0006886750",
        "type": "Aktier",
        "name": "ATLAS COPCO A",
        "price": {"amount": 215, "currency": "SEK"}
      },
      "position": {
        "quantity": 126,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 215, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 27090, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 27090, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0001174970",
        "type": "Aktier",
        "name": "MILLICOM SDB",
        "price": {"amount": 470.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 63,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 470.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 29616.3, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 29616.3, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0476541577",
        "type": "Aktiefonder",
        "name": "Nordea Global Portfolio",
        "price": {"amount": 172.18, "currency": "SEK"}
      },
      "position": {
        "quantity": 3613.0977,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 172.18, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 622103.161986, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 622103.161986, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000103814",
        "type": "Aktier",
        "name": "ELECTROLUX B",
        "price": {"amount": 227.9, "currency": "SEK"}
      },
      "position": {
        "quantity": 166,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 227.9, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 37831.4, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 37831.4, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000064076",
        "type": "Aktiefonder",
        "name": "Nordea Global Dividend Fund",
        "price": {"amount": 131.9046, "currency": "SEK"}
      },
      "position": {
        "quantity": -463.0969,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 131.9046, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": -61084.61135574, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": -61084.61135574, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000106270",
        "type": "Aktier",
        "name": "H & M  B",
        "price": {"amount": 257.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 117,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 257.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 30115.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 30115.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000242455",
        "type": "Aktier",
        "name": "SWEDBANK A",
        "price": {"amount": 184.3, "currency": "SEK"}
      },
      "position": {
        "quantity": 170,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 184.3, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 31331, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 31331, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Likvida medel"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 125252.58, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 125252.58, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0992303122",
        "type": "Räntefonder",
        "name": "Nordea Nordisk Kreditfond",
        "price": {"amount": 904, "currency": "SEK"}
      },
      "position": {
        "quantity": 86.336,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 904, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 78047.744, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 78047.744, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0778445386",
        "type": "Aktiefonder",
        "name": "Nordea 1 North American All Cap Fund, Inst",
        "price": {"amount": 1322.95, "currency": "SEK"}
      },
      "position": {
        "quantity": 64.2921,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1322.95, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 85055.233695, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 85055.233695, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000202624",
        "type": "Aktier",
        "name": "GETINGE B",
        "price": {"amount": 176.2, "currency": "SEK"}
      },
      "position": {
        "quantity": 147,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 176.2, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 25901.4, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 25901.4, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0637345355",
        "type": "Aktiefonder",
        "name": "Nordea Stable Emerging Markets Equity Fund",
        "price": {"amount": 503.52, "currency": "SEK"}
      },
      "position": {
        "quantity": 374.8464,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 503.52, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 188742.659328, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 188742.659328, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048962",
        "type": "Aktiefonder",
        "name": "Nordea Japan Fund",
        "price": {"amount": 1.9054, "currency": "SEK"}
      },
      "position": {
        "quantity": 39015.9948,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1.9054, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 74341.07649192, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 74341.07649192, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0390858958",
        "type": "Räntefonder",
        "name": "Nordea US HY Bond Fund (extern förvaltare)",
        "price": {"amount": 129.14, "currency": "SEK"}
      },
      "position": {
        "quantity": 1291.1644,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 129.14, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 166740.970616, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 166740.970616, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000806994",
        "type": "Aktier",
        "name": "JM ",
        "price": {"amount": 237, "currency": "SEK"}
      },
      "position": {
        "quantity": 82,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 237, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 19434, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 19434, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000667891",
        "type": "Aktier",
        "name": "SANDVIK",
        "price": {"amount": 83.55, "currency": "SEK"}
      },
      "position": {
        "quantity": 474,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 83.55, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 39602.7, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 39602.7, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0402780950",
        "type": "Räntefonder",
        "name": "Nordea European Corporate Bond Fund",
        "price": {"amount": 486.55, "currency": "SEK"}
      },
      "position": {
        "quantity": 518.6794,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 486.55, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 252363.46207, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 252363.46207, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0005190238",
        "type": "Aktier",
        "name": "TELE2 B",
        "price": {"amount": 74.75, "currency": "SEK"}
      },
      "position": {
        "quantity": 213,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 74.75, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 15921.75, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 15921.75, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000148884",
        "type": "Aktier",
        "name": "SEB A",
        "price": {"amount": 80.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 467,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 80.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 37546.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 37546.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000164626",
        "type": "Aktier",
        "name": "KINNEVIK B",
        "price": {"amount": 217.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 64,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 217.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 13913.6, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 13913.6, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000163628",
        "type": "Aktier",
        "name": "ELEKTA B",
        "price": {"amount": 67.2, "currency": "SEK"}
      },
      "position": {
        "quantity": 186,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 67.2, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 12499.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 12499.2, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "142958778",
    "totalMarketValue": 8824717.85,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Servicekonto",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "SE0000382335",
        "type": "Aktier",
        "name": "AUTOLIV INC. SDB",
        "price": {"amount": 1015, "currency": "SEK"}
      },
      "position": {
        "quantity": 550,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1015, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 558250, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 558250, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "GB0009895292",
        "type": "Aktier",
        "name": "ASTRA ZENECA",
        "price": {"amount": 494.5, "currency": "SEK"}
      },
      "position": {
        "quantity": 605,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 494.5, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 299172.5, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 299172.5, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0006992640",
        "type": "Strukturerade produkter",
        "name": "NORDEA KREDITBEVIS EUROPA H Y BUFFERT B043 200720",
        "price": {"amount": 87, "currency": "SEK"}
      },
      "position": {
        "quantity": 500000,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 87, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 435000, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 435000, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000148884",
        "type": "Aktier",
        "name": "SEB A",
        "price": {"amount": 80.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 5800,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 80.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 466320, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 466320, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000189946",
        "type": "Aktier",
        "name": "IFS B",
        "price": {"amount": 367.5, "currency": "SEK"}
      },
      "position": {
        "quantity": 1147,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 367.5, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 421522.5, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 421522.5, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0003990795",
        "type": "Strukturerade produkter",
        "name": "NORDEA FONDOBLIGATION NEKLYX500 5 DELT 3452 160630",
        "price": {"amount": 127.823, "currency": "SEK"}
      },
      "position": {
        "quantity": 500000,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 127.823, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 639115, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 639115, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0005338183",
        "type": "Strukturerade produkter",
        "name": "NORDEA KREDITBEVIS EUROPA HIGH YIELD A163 180716",
        "price": {"amount": 100.88, "currency": "SEK"}
      },
      "position": {
        "quantity": 500000,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.88, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 504400, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 504400, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "QV0004452747",
        "type": "Räntepapper",
        "name": "PREMIER 2012:1 10-FÖLJD",
        "price": {"amount": 5020, "currency": "SEK"}
      },
      "position": {
        "quantity": 100,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 5020, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 502000, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 502000, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "CH0012221716",
        "type": "Aktier",
        "name": "ABB LTD",
        "price": {"amount": 174, "currency": "SEK"}
      },
      "position": {
        "quantity": 2150,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 174, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 374100, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 374100, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000115446",
        "type": "Aktier",
        "name": "VOLVO B",
        "price": {"amount": 92.8, "currency": "SEK"}
      },
      "position": {
        "quantity": 5250,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 92.8, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 487200, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 487200, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000891665",
        "type": "Aktier",
        "name": "DJURGÅRDEN FOTBOLL B",
        "price": {"amount": 0, "currency": "SEK"}
      },
      "position": {
        "quantity": 320,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 0, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 0, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 0, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000114837",
        "type": "Aktier",
        "name": "TRELLEBORG B",
        "price": {"amount": 154.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 2025,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 154.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 312052.5, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 312052.5, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000107419",
        "type": "Aktier",
        "name": "INVESTOR B",
        "price": {"amount": 292.5, "currency": "SEK"}
      },
      "position": {
        "quantity": 475,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 292.5, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 138937.5, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 138937.5, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000427361",
        "type": "Aktier",
        "name": "NORDEA BANK AB (SEK)",
        "price": {"amount": 81.85, "currency": "SEK"}
      },
      "position": {
        "quantity": 4261,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 81.85, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 348762.85, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 348762.85, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000950636",
        "type": "Aktier",
        "name": "FABEGE ",
        "price": {"amount": 137.5, "currency": "SEK"}
      },
      "position": {
        "quantity": 4850,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 137.5, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 666875, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 666875, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0004270247",
        "type": "Strukturerade produkter",
        "name": "NORDEA HEDGEFONDBEVIS NEKTAR & LYNX 3503 161229",
        "price": {"amount": 120.337, "currency": "SEK"}
      },
      "position": {
        "quantity": 2000000,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 120.337, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 2406740, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 2406740, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000379190",
        "type": "Aktier",
        "name": "CASTELLUM",
        "price": {"amount": 115, "currency": "SEK"}
      },
      "position": {
        "quantity": 2298,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 115, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 264270, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 264270, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "18957380752",
    "totalMarketValue": 6257033.239999999,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Kapitalförsäkring Depå",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "SE0000106270",
        "type": "Aktier",
        "name": "H & M  B",
        "price": {"amount": 257.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 967,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 257.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 248905.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 248905.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000103814",
        "type": "Aktier",
        "name": "ELECTROLUX B",
        "price": {"amount": 227.9, "currency": "SEK"}
      },
      "position": {
        "quantity": 1852,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 227.9, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 422070.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 422070.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0006886750",
        "type": "Aktier",
        "name": "ATLAS COPCO A",
        "price": {"amount": 215, "currency": "SEK"}
      },
      "position": {
        "quantity": 841,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 215, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 180815, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 180815, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000382335",
        "type": "Aktier",
        "name": "AUTOLIV INC. SDB",
        "price": {"amount": 1015, "currency": "SEK"}
      },
      "position": {
        "quantity": 446,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1015, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 452690, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 452690, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0007691613",
        "type": "Aktier",
        "name": "DOMETIC GROUP",
        "price": {"amount": 55.45, "currency": "SEK"}
      },
      "position": {
        "quantity": 3536,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 55.45, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 196071.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 196071.2, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000806994",
        "type": "Aktier",
        "name": "JM ",
        "price": {"amount": 237, "currency": "SEK"}
      },
      "position": {
        "quantity": 791,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 237, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 187467, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 187467, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000115446",
        "type": "Aktier",
        "name": "VOLVO B",
        "price": {"amount": 92.8, "currency": "SEK"}
      },
      "position": {
        "quantity": 4997,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 92.8, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 463721.6, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 463721.6, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000114837",
        "type": "Aktier",
        "name": "TRELLEBORG B",
        "price": {"amount": 154.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 1524,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 154.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 234848.4, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 234848.4, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000412371",
        "type": "Aktier",
        "name": "MTG B",
        "price": {"amount": 234, "currency": "SEK"}
      },
      "position": {
        "quantity": 695,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 234, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 162630, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 162630, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000221723",
        "type": "Aktier",
        "name": "MEDA A",
        "price": {"amount": 148.5, "currency": "SEK"}
      },
      "position": {
        "quantity": 2951,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 148.5, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 438223.5, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 438223.5, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000202624",
        "type": "Aktier",
        "name": "GETINGE B",
        "price": {"amount": 176.2, "currency": "SEK"}
      },
      "position": {
        "quantity": 1119,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 176.2, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 197167.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 197167.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000164626",
        "type": "Aktier",
        "name": "KINNEVIK B",
        "price": {"amount": 217.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 993,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 217.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 215878.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 215878.2, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000163628",
        "type": "Aktier",
        "name": "ELEKTA B",
        "price": {"amount": 67.2, "currency": "SEK"}
      },
      "position": {
        "quantity": 2565,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 67.2, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 172368, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 172368, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000148884",
        "type": "Aktier",
        "name": "SEB A",
        "price": {"amount": 80.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 4127,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 80.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 331810.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 331810.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000242455",
        "type": "Aktier",
        "name": "SWEDBANK A",
        "price": {"amount": 184.3, "currency": "SEK"}
      },
      "position": {
        "quantity": 1213,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 184.3, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 223555.9, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 223555.9, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0005190238",
        "type": "Aktier",
        "name": "TELE2 B",
        "price": {"amount": 74.75, "currency": "SEK"}
      },
      "position": {
        "quantity": 2512,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 74.75, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 187772, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 187772, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Likvida medel"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 206475.54, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 206475.54, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000667891",
        "type": "Aktier",
        "name": "SANDVIK",
        "price": {"amount": 83.55, "currency": "SEK"}
      },
      "position": {
        "quantity": 5032,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 83.55, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 420423.6, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 420423.6, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "CH0012221716",
        "type": "Aktier",
        "name": "ABB LTD",
        "price": {"amount": 174, "currency": "SEK"}
      },
      "position": {
        "quantity": 3442,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 174, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 598908, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 598908, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0007100599",
        "type": "Aktier",
        "name": "HANDELSBANKEN A ",
        "price": {"amount": 108.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 3220,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 108.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 348082, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 348082, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0001174970",
        "type": "Aktier",
        "name": "MILLICOM SDB",
        "price": {"amount": 470.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 781,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 470.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 367148.1, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 367148.1, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "18957288066",
    "totalMarketValue": 3596505.88622029,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Kapitalförsäkring Depå",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "SE0000103814",
        "type": "Aktier",
        "name": "ELECTROLUX B",
        "price": {"amount": 227.9, "currency": "SEK"}
      },
      "position": {
        "quantity": 166,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 227.9, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 37831.4, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 37831.4, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0458980835",
        "type": "Räntefonder",
        "name": "Nordea US Corp Bond (extern förvaltare)",
        "price": {"amount": 100.45, "currency": "SEK"}
      },
      "position": {
        "quantity": 834.6541,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.45, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 83841.004345, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 83841.004345, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000106270",
        "type": "Aktier",
        "name": "H & M  B",
        "price": {"amount": 257.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 117,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 257.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 30115.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 30115.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048988",
        "type": "Aktiefonder",
        "name": "Nordea Europe Fund",
        "price": {"amount": 12705.4071, "currency": "SEK"}
      },
      "position": {
        "quantity": 7.2736,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 12705.4071, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 92414.04908256, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 92414.04908256, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000382335",
        "type": "Aktier",
        "name": "AUTOLIV INC. SDB",
        "price": {"amount": 1015, "currency": "SEK"}
      },
      "position": {
        "quantity": 36,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1015, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 36540, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 36540, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0602544602",
        "type": "Räntefonder",
        "name": "Nordea European High Yield Bond Fund II",
        "price": {"amount": 604.21, "currency": "SEK"}
      },
      "position": {
        "quantity": 147.7358,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 604.21, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 89263.447718, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 89263.447718, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000114837",
        "type": "Aktier",
        "name": "TRELLEBORG B",
        "price": {"amount": 154.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 149,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 154.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 22960.9, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 22960.9, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000115446",
        "type": "Aktier",
        "name": "VOLVO B",
        "price": {"amount": 92.8, "currency": "SEK"}
      },
      "position": {
        "quantity": 379,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 92.8, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 35171.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 35171.2, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "CH0012221716",
        "type": "Aktier",
        "name": "ABB LTD",
        "price": {"amount": 174, "currency": "SEK"}
      },
      "position": {
        "quantity": 191,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 174, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 33234, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 33234, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0003087436",
        "type": "Räntefonder",
        "name": "Nordea Private Banking Ränteportfölj utd",
        "price": {"amount": 100.8393, "currency": "SEK"}
      },
      "position": {
        "quantity": 10059.7027,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.8393, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1014413.37847611, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1014413.37847611, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000164626",
        "type": "Aktier",
        "name": "KINNEVIK B",
        "price": {"amount": 217.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 64,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 217.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 13913.6, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 13913.6, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000148884",
        "type": "Aktier",
        "name": "SEB A",
        "price": {"amount": 80.4, "currency": "SEK"}
      },
      "position": {
        "quantity": 467,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 80.4, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 37546.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 37546.8, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000163628",
        "type": "Aktier",
        "name": "ELEKTA B",
        "price": {"amount": 67.2, "currency": "SEK"}
      },
      "position": {
        "quantity": 186,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 67.2, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 12499.2, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 12499.2, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0006886750",
        "type": "Aktier",
        "name": "ATLAS COPCO A",
        "price": {"amount": 215, "currency": "SEK"}
      },
      "position": {
        "quantity": 126,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 215, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 27090, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 27090, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0476541577",
        "type": "Aktiefonder",
        "name": "Nordea Global Portfolio",
        "price": {"amount": 172.18, "currency": "SEK"}
      },
      "position": {
        "quantity": 3613.0973,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 172.18, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 622103.093114, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 622103.093114, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000806994",
        "type": "Aktier",
        "name": "JM ",
        "price": {"amount": 237, "currency": "SEK"}
      },
      "position": {
        "quantity": 82,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 237, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 19434, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 19434, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0001174970",
        "type": "Aktier",
        "name": "MILLICOM SDB",
        "price": {"amount": 470.1, "currency": "SEK"}
      },
      "position": {
        "quantity": 63,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 470.1, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 29616.3, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 29616.3, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0992303122",
        "type": "Räntefonder",
        "name": "Nordea Nordisk Kreditfond",
        "price": {"amount": 904, "currency": "SEK"}
      },
      "position": {
        "quantity": 86.336,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 904, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 78047.744, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 78047.744, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000064076",
        "type": "Aktiefonder",
        "name": "Nordea Global Dividend Fund",
        "price": {"amount": 131.9046, "currency": "SEK"}
      },
      "position": {
        "quantity": -463.0969,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 131.9046, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": -61084.61135574, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": -61084.61135574, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000202624",
        "type": "Aktier",
        "name": "GETINGE B",
        "price": {"amount": 176.2, "currency": "SEK"}
      },
      "position": {
        "quantity": 147,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 176.2, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 25901.4, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 25901.4, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Likvida medel"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 125252.31, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 125252.31, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048962",
        "type": "Aktiefonder",
        "name": "Nordea Japan Fund",
        "price": {"amount": 1.9054, "currency": "SEK"}
      },
      "position": {
        "quantity": 39015.9948,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1.9054, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 74341.07649192, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 74341.07649192, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0637345355",
        "type": "Aktiefonder",
        "name": "Nordea Stable Emerging Markets Equity Fund",
        "price": {"amount": 503.52, "currency": "SEK"}
      },
      "position": {
        "quantity": 374.8464,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 503.52, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 188742.659328, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 188742.659328, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0005190238",
        "type": "Aktier",
        "name": "TELE2 B",
        "price": {"amount": 74.75, "currency": "SEK"}
      },
      "position": {
        "quantity": 213,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 74.75, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 15921.75, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 15921.75, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0390858958",
        "type": "Räntefonder",
        "name": "Nordea US HY Bond Fund (extern förvaltare)",
        "price": {"amount": 129.14, "currency": "SEK"}
      },
      "position": {
        "quantity": 1291.1642,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 129.14, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 166740.944788, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 166740.944788, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000242455",
        "type": "Aktier",
        "name": "SWEDBANK A",
        "price": {"amount": 184.3, "currency": "SEK"}
      },
      "position": {
        "quantity": 170,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 184.3, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 31331, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 31331, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813332",
        "type": "Aktiefonder",
        "name": "Nordea Global",
        "price": {"amount": 2.7798, "currency": "SEK"}
      },
      "position": {
        "quantity": 63861.2727,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 2.7798, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 177521.56585146, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 177521.56585146, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813308",
        "type": "Aktiefonder",
        "name": "Nordea Kinafond",
        "price": {"amount": 155.2202, "currency": "SEK"}
      },
      "position": {
        "quantity": 477.2799,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 155.2202, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 74083.48153398, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 74083.48153398, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813381",
        "type": "Aktiefonder",
        "name": "Nordea North America Fund",
        "price": {"amount": 134.13, "currency": "SEK"}
      },
      "position": {
        "quantity": 631.4549,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 134.13, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 84697.045737, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 84697.045737, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0778445386",
        "type": "Aktiefonder",
        "name": "Nordea 1 North American All Cap Fund, Inst",
        "price": {"amount": 1322.95, "currency": "SEK"}
      },
      "position": {
        "quantity": 64.2921,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1322.95, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 85055.233695, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 85055.233695, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0402780950",
        "type": "Räntefonder",
        "name": "Nordea European Corporate Bond Fund",
        "price": {"amount": 486.55, "currency": "SEK"}
      },
      "position": {
        "quantity": 518.6793,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 486.55, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 252363.413415, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 252363.413415, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "SE0000667891",
        "type": "Aktier",
        "name": "SANDVIK",
        "price": {"amount": 83.55, "currency": "SEK"}
      },
      "position": {
        "quantity": 474,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 83.55, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 39602.7, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 39602.7, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "14483926772",
    "totalMarketValue": 662707.84245363,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Fondkonto",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "LU0244354667",
        "type": "Aktiefonder",
        "name": "Schroders SISF China Opportunities A Acc USD",
        "price": {"amount": 2027.4569, "currency": "SEK"}
      },
      "position": {
        "quantity": 151.0875,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 2027.4569, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 306323.39437875, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 306323.39437875, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0385345219",
        "type": "Aktiefonder",
        "name": "Goldman Sachs N-11SM Equity",
        "price": {"amount": 89.4339, "currency": "SEK"}
      },
      "position": {
        "quantity": 2727.432,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 89.4339, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 243924.8807448, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 243924.8807448, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0087942438",
        "type": "Räntefonder",
        "name": "Nordea Likviditetsinvest",
        "price": {"amount": 155.5614, "currency": "SEK"}
      },
      "position": {
        "quantity": 722.9272,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 155.5614, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 112459.56733008, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 112459.56733008, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "14487223903",
    "totalMarketValue": 1634814.6137462,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Fondkonto",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "LU0402780950",
        "type": "Räntefonder",
        "name": "Nordea European Corporate Bond Fund",
        "price": {"amount": 486.55, "currency": "SEK"}
      },
      "position": {
        "quantity": 1705.878,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 486.55, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 829994.9409, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 829994.9409, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0458980835",
        "type": "Räntefonder",
        "name": "Nordea US Corp Bond (extern förvaltare)",
        "price": {"amount": 100.45, "currency": "SEK"}
      },
      "position": {
        "quantity": 7469.1185,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.45, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 750272.953325, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 750272.953325, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813431",
        "type": "Räntefonder",
        "name": "Nordea Institutionell Kortränta",
        "price": {"amount": 1210.452, "currency": "SEK"}
      },
      "position": {
        "quantity": 45.0631,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1210.452, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 54546.7195212, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 54546.7195212, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "32140106679",
    "totalMarketValue": 53616.77,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "PERSONKONTO              ",
      "type": "DEPOSIT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "ACCOUNT",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 53616.77, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 53616.77, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "18957008748",
    "totalMarketValue": 25866196.344235327,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Kapitalförsäkring Depå",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "FI4000048988",
        "type": "Aktiefonder",
        "name": "Nordea Europe Fund",
        "price": {"amount": 12705.4071, "currency": "SEK"}
      },
      "position": {
        "quantity": 141.6517,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 12705.4071, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1799742.51490707, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1799742.51490707, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000064076",
        "type": "Aktiefonder",
        "name": "Nordea Global Dividend Fund",
        "price": {"amount": 131.9046, "currency": "SEK"}
      },
      "position": {
        "quantity": 9490.9878,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 131.9046, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1251904.94936388, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1251904.94936388, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0778445386",
        "type": "Aktiefonder",
        "name": "Nordea 1 North American All Cap Fund, Inst",
        "price": {"amount": 1322.95, "currency": "SEK"}
      },
      "position": {
        "quantity": 1265.947,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1322.95, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1674784.58365, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1674784.58365, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0476541577",
        "type": "Aktiefonder",
        "name": "Nordea Global Portfolio",
        "price": {"amount": 172.18, "currency": "SEK"}
      },
      "position": {
        "quantity": 74867.0114,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 172.18, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 12890602.022852, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 12890602.022852, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813308",
        "type": "Aktiefonder",
        "name": "Nordea Kinafond",
        "price": {"amount": 155.2202, "currency": "SEK"}
      },
      "position": {
        "quantity": 9354.0005,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 155.2202, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1451929.8284101, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1451929.8284101, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI0008813381",
        "type": "Aktiefonder",
        "name": "Nordea North America Fund",
        "price": {"amount": 134.13, "currency": "SEK"}
      },
      "position": {
        "quantity": 12615.5332,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 134.13, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1692121.468116, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1692121.468116, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Likvida medel"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 87629.61, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 87629.61, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "FI4000048962",
        "type": "Aktiefonder",
        "name": "Nordea Japan Fund",
        "price": {"amount": 1.9054, "currency": "SEK"}
      },
      "position": {
        "quantity": 782216.4882,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 1.9054, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1490435.29661628, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1490435.29661628, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0637345355",
        "type": "Aktiefonder",
        "name": "Nordea Stable Emerging Markets Equity Fund",
        "price": {"amount": 503.52, "currency": "SEK"}
      },
      "position": {
        "quantity": 7004.7785,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 503.52, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 3527046.07032, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 3527046.07032, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "18957013865",
    "totalMarketValue": 26583941.56223269,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Kapitalförsäkring Depå",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {
        "isin": "SE0003087436",
        "type": "Räntefonder",
        "name": "Nordea Private Banking Ränteportfölj utd",
        "price": {"amount": 100.8393, "currency": "SEK"}
      },
      "position": {
        "quantity": 197498.0133,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 100.8393, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 19915561.41256269, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 19915561.41256269, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0602544602",
        "type": "Räntefonder",
        "name": "Nordea European High Yield Bond Fund II",
        "price": {"amount": 604.21, "currency": "SEK"}
      },
      "position": {
        "quantity": 3569.9313,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 604.21, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 2156988.190773, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 2156988.190773, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0602537572",
        "type": "Räntefonder",
        "name": "Nordea Low Duration US HY Bond (extern förvaltare)",
        "price": {"amount": 74.51, "currency": "SEK"}
      },
      "position": {
        "quantity": 12236.3945,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 74.51, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 911733.754195, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 911733.754195, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0390858958",
        "type": "Räntefonder",
        "name": "Nordea US HY Bond Fund (extern förvaltare)",
        "price": {"amount": 129.14, "currency": "SEK"}
      },
      "position": {
        "quantity": -9020.9657,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 129.14, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": -1164967.510498, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": -1164967.510498, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Likvida medel"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 2934420.04, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 2934420.04, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {
        "isin": "LU0992303122",
        "type": "Räntefonder",
        "name": "Nordea Nordisk Kreditfond",
        "price": {"amount": 904, "currency": "SEK"}
      },
      "position": {
        "quantity": 2024.5638,
        "prices": [{
          "data": {
            "time": "2016-05-25T22:00:00Z",
            "amount": {"amount": 904, "currency": "SEK"},
            "source": "OMEGA",
            "order": 2
          },
          "marketValue": {"amount": 1830205.6752, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 1830205.6752, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "32141055202",
    "totalMarketValue": 0,
    "currency": "USD",
    "accountTypeSpecifications": {
      "name": "PRIVATE BANKINGKONTO     ",
      "type": "DEPOSIT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "ACCOUNT",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 0, "currency": "USD"},
          "marketValueInLocalCurrency": {"amount": 0, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 0, "currency": "EUR"},
          "marketValueInLocalCurrency": {"amount": 0, "currency": "SEK"}
        }]
      }
    }, {
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 0, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 0, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "WRAP_47176544081",
    "totalMarketValue": 1178968,
    "currency": "SEK",
    "isWrapper": true,
    "accountTypeSpecifications": {
      "name": "ISK",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "nestedAccounts": [{
      "accountNumber": "47176544081",
      "totalMarketValue": 1178968,
      "currency": "SEK",
      "isProduct": false,
      "accountTypeSpecifications": {
        "name": "ISK",
        "type": "INVESTMENT_ACCOUNT",
        "category": "FREE_ASSET",
        "subCategory": "CUSTODY",
        "hasHoldings": false,
        "product": false,
        "accountInstrument": false
      },
      "holdings": [{
        "instrument": {
          "isin": "SE0001700386",
          "type": "Strukturerade produkter",
          "name": "NORDEA AKTIEOBLIGATION PRIVATE EQUITY 3053 170720",
          "price": {"amount": 39.6, "currency": "SEK"}
        },
        "position": {
          "quantity": 500000,
          "prices": [{
            "data": {
              "time": "2016-05-25T22:00:00Z",
              "amount": {"amount": 39.6, "currency": "SEK"},
              "source": "OMEGA",
              "order": 2
            },
            "marketValue": {"amount": 198000, "currency": "SEK"},
            "marketValueInLocalCurrency": {"amount": 198000, "currency": "SEK"}
          }]
        }
      }, {
        "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
        "position": {
          "prices": [{
            "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
            "marketValue": {"amount": 35968, "currency": "SEK"},
            "marketValueInLocalCurrency": {"amount": 35968, "currency": "SEK"}
          }]
        }
      }, {
        "instrument": {
          "isin": "SE0006992921",
          "type": "Strukturerade produkter",
          "name": "NORDEA KREDITBEVIS USA HY BUFFERT B137 210120",
          "price": {"amount": 94.5, "currency": "SEK"}
        },
        "position": {
          "quantity": 1000000,
          "prices": [{
            "data": {
              "time": "2016-05-25T22:00:00Z",
              "amount": {"amount": 94.5, "currency": "SEK"},
              "source": "OMEGA",
              "order": 2
            },
            "marketValue": {"amount": 945000, "currency": "SEK"},
            "marketValueInLocalCurrency": {"amount": 945000, "currency": "SEK"}
          }]
        }
      }]
    }]
  }, {
    "accountNumber": "39982001124",
    "totalMarketValue": -3500000,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "HYPOTEK        ",
      "type": "LOAN_ACCOUNT",
      "category": "LIABILITY",
      "subCategory": "LIABILITY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"type": "Lån", "name": "Lån"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": -3500000, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": -3500000, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "959163",
    "totalMarketValue": 83435.8,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "Depå",
      "type": "INVESTMENT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "CUSTODY",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Likvida medel"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 83435.8, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 83435.8, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "32141028205",
    "totalMarketValue": 206522.96,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "AKTIELIKVIDKONTO         ",
      "type": "DEPOSIT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "ACCOUNT",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 206522.96, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 206522.96, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "32141053587",
    "totalMarketValue": -4997075.58,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "CHECKKONTO               ",
      "type": "DEPOSIT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "ACCOUNT",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": -4997075.58, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": -4997075.58, "currency": "SEK"}
        }]
      }
    }]
  }, {
    "accountNumber": "32142200850",
    "totalMarketValue": 261079,
    "currency": "SEK",
    "accountTypeSpecifications": {
      "name": "FÖRMÅNSKONTO             ",
      "type": "DEPOSIT_ACCOUNT",
      "category": "FREE_ASSET",
      "subCategory": "ACCOUNT",
      "hasHoldings": false,
      "product": false,
      "accountInstrument": false
    },
    "holdings": [{
      "instrument": {"isin": "0000000113", "type": "Konton", "name": "Bankkonto"},
      "position": {
        "prices": [{
          "data": {"time": "2016-05-25T22:00:00Z", "source": "OMEGA", "order": 2},
          "marketValue": {"amount": 261079, "currency": "SEK"},
          "marketValueInLocalCurrency": {"amount": 261079, "currency": "SEK"}
        }]
      }
    }]
  }], "_details": {"ENV": "AITE", "COUNTRY": "se", "CUSTOMER": "197010230121"}
}]