import '../styles/styles.css'
import Person from './modules/person'


if(module.hot){
    module.hot.accept()
}


class Adult extends Person {
    payTaxes(){
        console.log(this.name + " now owes ZERO taxes!");
    }
}

let john = new Person("John Smith", "Purple");
john.greet();

let kate = new Adult("Kate Smith", "Orange");
kate.greet();
kate.payTaxes();