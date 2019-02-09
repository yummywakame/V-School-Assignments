# forEach(), find(), findIndex(), some(), and every() Wizard Battle Practice
### > For V School // Full Stack JavaScript // January 2019 Cohort

#### Completed according to assignment instructions: 
- https://coursework.vschool.io/foreach-find-findindex-some-and-every-wizard-battle-practice/

*Run:* ~$ node <a href="app.js">app.js</a>

#### Console:
```console
foo@bar:~/assignments/exercises/week-03/13-wizard-battle-practice (master) $ node app.js
WIZARDS:
[ { name: 'Edwin Odesseiron', age: 37, alignment: 'lawful evil' },
  { name: 'Harry Potter', age: 21, alignment: 'neutral good' },
  { name: 'Hermony Granger', age: 21, alignment: 'lawful good' },
  { name: 'Ronny the Bear', age: 21, alignment: 'neutral good' },
  { name: 'Gandalf', age: 100, alignment: 'neutral good' } ]

1: Log to the console every wizard's name.
{ name: 'Edwin Odesseiron', age: 37, alignment: 'lawful evil' }
{ name: 'Harry Potter', age: 21, alignment: 'neutral good' }
{ name: 'Hermony Granger', age: 21, alignment: 'lawful good' }
{ name: 'Ronny the Bear', age: 21, alignment: 'neutral good' }
{ name: 'Gandalf', age: 100, alignment: 'neutral good' }

2: Add an isAlive property to every wizard, setting it to true.
[ { name: 'Edwin Odesseiron',
    age: 37,
    alignment: 'lawful evil',
    isAlive: true },
  { name: 'Harry Potter',
    age: 21,
    alignment: 'neutral good',
    isAlive: true },
  { name: 'Hermony Granger',
    age: 21,
    alignment: 'lawful good',
    isAlive: true },
  { name: 'Ronny the Bear',
    age: 21,
    alignment: 'neutral good',
    isAlive: true },
  { name: 'Gandalf',
    age: 100,
    alignment: 'neutral good',
    isAlive: true } ]

3: Make a new array of all the Wizards that are 'neutral good'.
[ { name: 'Harry Potter',
    age: 21,
    alignment: 'neutral good',
    isAlive: true },
  { name: 'Ronny the Bear',
    age: 21,
    alignment: 'neutral good',
    isAlive: true },
  { name: 'Gandalf',
    age: 100,
    alignment: 'neutral good',
    isAlive: true } ]

4: Find the index of a wizard that is 'lawful good'.
2

5: Return a Boolean that states whether or not all the wizards are alive.
true

6: Return a Boolean that states whether or not at least one wizard is 'neutral good'.
true

7: Check every 'alignment' for every wizard. Kill every 'neutral good' wizard.
[ { name: 'Edwin Odesseiron',
    age: 37,
    alignment: 'lawful evil',
    isAlive: true },
  { name: 'Harry Potter',
    age: 21,
    alignment: 'neutral good',
    isAlive: false },
  { name: 'Hermony Granger',
    age: 21,
    alignment: 'lawful good',
    isAlive: true },
  { name: 'Ronny the Bear',
    age: 21,
    alignment: 'neutral good',
    isAlive: false },
  { name: 'Gandalf',
    age: 100,
    alignment: 'neutral good',
    isAlive: false } ]

8: Return a Boolean that states whether or not all the wizards are alive.
false

9: Return a Boolean that states whether or not some of the wizards are alive.
true
```
