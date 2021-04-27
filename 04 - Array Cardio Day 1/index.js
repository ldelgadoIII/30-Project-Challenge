const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const oldies = inventors.filter( inventor => {
      return inventor.year >= 1500 && inventor.year < 1600;
  })
  console.log("Oldies: ", oldies);

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const names = [];

  inventors.map( inventor => {
      const name = {
          first: inventor.first,
          last: inventor.last
      };
      names.push(name);
  })
  console.log("Names: ", names);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const sortYear = (a, b) => {
    if((a.year) < (b.year)) return 1;
    if((a.year) > (b.year)) return -1;
  }
  const birthdaySort = inventors.sort(sortYear)
  console.log("Sorted by Year: ", birthdaySort)

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  const ages = [];

  inventors.forEach( inventor => {
      ages.push(inventor.passed - inventor.year);
  });

  const reducer = (accumulator, currVal) => accumulator + currVal;
  
  const yearsLived = ages.reduce(reducer)
  console.log("Total Years: ", yearsLived)

  // 5. Sort the inventors by years lived
  const sortAge = (a, b) => {
    if((a.passed - a.year) < (b.passed - b.year)) return 1;
    if((a.passed - a.year) > (b.passed - b.year)) return -1;
  }
  const yearsLivedSort = inventors.sort(sortAge)
  console.log("Sorted by Years Lived: ", yearsLivedSort)

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  function sortLastName(a, b) {
    const firstLetter = a.last.charAt(0);
    const secondLetter = b.last.charAt(0);
    if (firstLetter > secondLetter) return 1;
    if (firstLetter < secondLetter) return -1;
  }

  const lastName = inventors.sort(sortLastName);
  console.log("Sort by Last: ", lastName)

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
