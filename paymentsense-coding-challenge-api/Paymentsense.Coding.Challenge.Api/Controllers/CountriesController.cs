using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Paymentsense.Coding.Challenge.Api.Models;
using Paymentsense.Coding.Challenge.Api.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{
    [Route("api/v{version:apiVersion}/countries")]
    [ApiVersion("1.0")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly ICountriesService _countriesService;
        private readonly ILogger _logger;
        public CountriesController(ICountriesService countriesService, ILoggerFactory loggerFactory)
        {
            _countriesService = countriesService;
            _logger = loggerFactory.CreateLogger(GetType());
        }

        [HttpGet]
        public async Task<ActionResult<List<Country>>> GetAsync()
        {
            try
            {
                var result = await _countriesService.GetCountriesAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An exception occured while requesting all countries");
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
