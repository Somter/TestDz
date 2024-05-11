import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding02property',
    templateUrl: './binding02property.component.html',
    styleUrls: ['./binding02property.component.css'],
    standalone: true
  })
  export class Binding02PropertyComponent implements OnInit {


    constructor() { }
    
    LaptopImg: string = 'assets/noutbuki.png';
    LaptopStr: string = 'Ноутбуки';    

    PcImg: string = 'assets/kompyutery.png';   
    PcStr: string = 'Компьютеры'; 

    MonitorImg: string = 'assets/monitory.png'; 
    MonitorStr: string = 'Мониторы';

    GamingImg: string = 'assets/tovary-dlya-gejmerov.png';
    GamingStr: string = 'Gaming'; 
    
    TabletsImg: string = 'assets/planshety.png';
    TabletsStr: string = 'Планшеты';
    
    CabeliImg:  string = 'assets/kabeli-i-perekhodniki.png'; 
    CabeliStr: string = 'Кабели и переходники';

    ComponentsImg: string = 'assets/kompyuternye-komplektuyushchie.png';
    ComponetsStr: string = 'Компьютерные комплектующие';

    SetevoeImg: string = 'assets/setevoe-oborudovanie.png'; 
    SetevorStr: string = 'Сетевое оборудувание';

    HeadPhoneImg: string = 'assets/naushniki-i-aksessuary.png';
    HeadPhoneStr: string = 'Наушнки и аксесуары';

    ClaviaturImg: string = 'assets/klaviatury-i-myshi.png';
    ClaviaturStr: string = 'Клавиатуры и мыши';

    ElectronicImg: string = 'assets/aksessuari-dlia-elektronyky.png';
    ElectronicStr: string = 'Аксессуары для клавиатури';

    OgrtechImg: string = 'assets/ofisnaya-tekhnika.png';
    OgrtechStr: string = 'Огратехника';
    ngOnInit() {
    }
  
  }
  