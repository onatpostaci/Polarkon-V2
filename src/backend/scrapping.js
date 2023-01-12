const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const xml2js = require("xml2js");
const crypto = require("crypto");
const https = require("https");

const getCurrencyRateUSDTR = async () => {
  try {
    const response = await axios.get(
      "http://www.tcmb.gov.tr/kurlar/today.xml",
      {
        httpsAgent: new https.Agent({
          secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        }),
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getCurrencyRateUSDTR();
