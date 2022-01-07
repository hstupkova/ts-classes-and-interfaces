class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
console.log(accounting);
accounting.describe();

const accountingCopy = { name: 'Accounting2', describe: accounting.describe };
accountingCopy.describe();
