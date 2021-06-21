using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Paymentsense.Coding.Challenge.Api.Models
{
    public class Country
    {
        public string Name { get; set; }
        public string Flag { get; set; }
        public string Region { get; set; }
        public string SubRegion { get; set; }
        public string Alpha3Code { get; set; }
        public string Capital { get; set; }
        public long Population { get; set; }
        public List<string> Timezones { get; set; }
        public List<Currency> Currencies { get; set; }
        public List<string> Borders { get; set; }
        public List<Language> Languages { get; set; }
    }
}
