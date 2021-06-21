using FluentAssertions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using Paymentsense.Coding.Challenge.Api.Controllers;
using Paymentsense.Coding.Challenge.Api.Services;
using Paymentsense.Coding.Challenge.Api.Tests.TestData;
using System;
using System.Threading.Tasks;
using Xunit;
namespace Paymentsense.Coding.Challenge.Api.Tests.Controllers
{
    public class CountriesControllerTests
    {
        ICountriesService countriesService = Substitute.For<ICountriesService>();
        ILoggerFactory loggerFactory = Substitute.For<ILoggerFactory>(); 
        ILogger logger = Substitute.For<ILogger>();

        public CountriesControllerTests()
        {
            countriesService.GetCountriesAsync().Returns(CountriesTestData.Countries);
            loggerFactory.CreateLogger(typeof(CountriesController)).Returns(logger);
        }

        [Fact]
        public async Task Get_OnInvoke_ReturnsExpectedResponse()
        {
            //Arrange
            var controller = new CountriesController(countriesService, loggerFactory);

            //Act
            var result = (await controller.GetAsync()).Result as OkObjectResult;

            //Assert
            result.StatusCode.Should().Be(StatusCodes.Status200OK);
        }

        [Fact]
        public async Task Get_OnInvoke_Calls_GetCountriesAsync_Once()
        {
            //Arrange
            var controller = new CountriesController(countriesService, loggerFactory);

            //Act
            var result = (await controller.GetAsync()).Result as OkObjectResult;

            //Assert
            await countriesService.Received(1).GetCountriesAsync();
        }

        [Fact]
        public async Task Get_OnGettingException_ReturnsInternalServerErrorCode()
        {
            //Arrange
            countriesService.GetCountriesAsync().Throws(new Exception());
            var controller = new CountriesController(countriesService, loggerFactory);

            //Act
            var result = (await controller.GetAsync()).Result as StatusCodeResult;

            //Assert
            result.StatusCode.Should().Be(StatusCodes.Status500InternalServerError);
        }
    }
}
