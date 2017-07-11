using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using Newtonsoft.Json;

namespace MovieWebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var formatters = config.Formatters;
            var jsonFormatter = formatters.JsonFormatter;

            // remove xml formatter
            formatters.Remove(formatters.XmlFormatter);

            jsonFormatter.SerializerSettings.Formatting = Formatting.Indented;
        }
    }
}
