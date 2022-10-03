
# Cyderes-skills API Usage

## Table of contents 

- [What it is](#what-it-is)
- [Where to find it](#where-to-find-it)
- [RESTful API Usage](#restful-api-usage)
- [Local Installation](#local-installation)
- [Acknowledgments](#acknowledgments)

## What it is

Cyderes-skills is a RESTful API built as a skills assessment for the Software Engineer role. API queries will provide detailed information about an IP adress or domain with data being pulled from [WHOIS API](https://whois.whoisxmlapi.com/).  

## Where to find it

> Check out the serverless GCP deployment [here](https://cyderes-api-gw-aa2v0pof.wl.gateway.dev/api).

## RESTful API Usage
This documentation will help you get familiar with the resources of the Cyderes-skills API and show you how to make queries.

### Using a search query
API Base URL: `https://cyderes-api-gw-aa2v0pof.wl.gateway.dev/api`

API Search Query Format: `https://cyderes-api-gw-aa2v0pof.wl.gateway.dev/api/<IP-OR-DOMAIN>`

*Sample Request*
```
https://cyderes-api-gw-aa2v0pof.wl.gateway.dev/api/google.com
```
```
//JSON Response

{
  createdDate	"1997-09-15T07:00:00+0000"
  updatedDate	"2019-09-09T15:39:04+0000"
  expiresDate	"2028-09-13T07:00:00+0000"
  registrant	{…}
  administrativeContact	{…}
  technicalContact	{…}
  domainName	"google.com"
  nameServers	{…}
  status	"clientUpdateProhibited c… serverDeleteProhibited"
  rawText	"Domain Name: google.com\…, at +44.02032062220\n--"
  parseCode	3515
  header	""
  strippedText	"Domain Name: google.com\…Server: ns3.google.com\n"
  footer	""
  audit	{…}
  registrarName	"MarkMonitor, Inc."
  registrarIANAID	"292"
  createdDateNormalized	"1997-09-15 07:00:00 UTC"
  updatedDateNormalized	"2019-09-09 15:39:04 UTC"
  expiresDateNormalized	"2028-09-13 07:00:00 UTC"
  registryData	{…}
  contactEmail	"abusecomplaints@markmonitor.com"
  domainNameExt	".com"
  estimatedDomainAge
}
```

## Local Installation

You can follow these steps to run the application on your local environment for **development and testing purposes**.

**Requirements before starting:**

  - [WHOIS API Key](https://whois.whoisxmlapi.com/)

### Installing

Clone the project to your local environment

```bash
  git clone https://github.com/chadvidovcich/cyderes-skills.git
```

Go to the project directory

```bash
  cd cyderes-skills
```

Install dependencies

```bash
  npm install
```

Create environment variable file

```bash
  touch .env
```

Add the following entries to the environment variable file (.env)

```bash
  PORT = 2121
  WHOISAPIKEY = "API_KEY_PLACEHOLDER"
```

Start the server in development mode

```bash
  npm run dev
```

Run testing suite on local server

```bash
  npm run test
```

## Acknowledgments

### Authors
 
[Chad Vidovcich](https://github.com/chadvidovcich)

## If I had more time I would add/change this

- Add more style to the API landing page. It's extremely basic in the current state.
- Filter data from external APIs.
- Add additional external APIs.
