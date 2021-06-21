using Paymentsense.Coding.Challenge.Api.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Paymentsense.Coding.Challenge.Api.Tests.TestData
{
    public class CountriesTestData
    {
        public static List<Country> Countries = new List<Country>
                    {
                        new Country {
                        Name = "Country",
                        Capital = "Capital",
                        Flag = "Flag",
                        Region = "Region",
                        SubRegion = "SubRegion",
                        Population = 222,
                        Borders = new List<string>{ "Country2", "Country3" },
                        Timezones = new List<string>{ "UTC+00:00" },
                        Currencies = new List<Currency> { new Currency { Name = "GBP", Symbol = "GBP" } },
                        Languages = new List<Language> { new Language { Name = "English", NativeName = "English" } }
                    }
            };

        public static string CountriesJson = @"[{""name"":""Afghanistan"", ""topLevelDomain"":["".af""],""alpha2Code"":""AF"",""alpha3Code"":""AFG"",""callingCodes"":[""93""],""capital"":""Kabul"",""altSpellings"":[""AF"",""Afġānistān""],""region"":""Asia"",""subregion"":""Southern Asia"",""population"":27657145,""latlng"":[33.0,65.0],""demonym"":""Afghan"",""area"":652230.0,""gini"":27.8,""timezones"":[""UTC+04:30""],""borders"":[""IRN"",""PAK"",""TKM"",""UZB"",""TJK"",""CHN""],""nativeName"":""افغانستان"",""numericCode"":""004"",""currencies"":[{""code"":""AFN"",""name"":""Afghan afghani"",""symbol"":""؋""}],""languages"":[{""iso639_1"":""ps"",""iso639_2"":""pus"",""name"":""Pashto"",""nativeName"":""پښتو""},{ ""iso639_1"":""uz"",""iso639_2"":""uzb"",""name"":""Uzbek"",""nativeName"":""Oʻzbek""}]";
    };
}
