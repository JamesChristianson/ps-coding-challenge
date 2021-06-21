using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Paymentsense.Coding.Challenge.Api.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace Paymentsense.Coding.Challenge.Api.Services
{
    public class CountriesService : ICountriesService
    {
        private readonly HttpClient _httpClient;
        private readonly IMemoryCache _cache;
        private readonly ILogger _logger;
        private readonly IOptions<AppSettings> _appSettings;

        public CountriesService(IHttpClientFactory httpClientFactory, IOptions<AppSettings> appSettings, IMemoryCache cache, ILoggerFactory loggerFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri(appSettings.Value.CountriesApiBase);
            _cache = cache;
            _logger = loggerFactory.CreateLogger(GetType());
            _appSettings = appSettings;
        }

        public async Task<List<Country>> GetCountriesAsync()
        {
            return await _cache.GetOrCreateAsync(CacheKeys.AllCountries, entry =>
            {
                entry.SlidingExpiration = TimeSpan.FromSeconds(_appSettings.Value.DefaultExpirationSeconds);
                return RequestCountriesAsync();
            });
        }

        private async Task<List<Country>> RequestCountriesAsync()
        {
            _logger.LogInformation($"Requesting countries from ${_appSettings.Value.CountriesApiName}.");

            var countriesResult = await _httpClient.GetAsync(_appSettings.Value.AllCountriesPath);
            var countriesJson = await countriesResult.Content.ReadAsStringAsync();
            var countries = JsonSerializer.Deserialize<List<Country>>(countriesJson, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
                IgnoreNullValues = true
            });

            _logger.LogInformation($"Returned {countries.Count} countries.");

            return countries;
        }
    }
}
