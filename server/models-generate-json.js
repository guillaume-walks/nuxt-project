// url - https://www.json-generator.com/#
// photo emndpoitn - https://picsum.photos/ 

// profil model
[
    '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    url: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    name: '{{firstName()}} {{surname()}}',
    type: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    description: '{{lorem(1, "paragraphs")}}',
    date: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    tags: [
      '{{repeat(1,4)}}',
      '{{random("js", "php", "asc3", "java")}}'
    ]
  }
]