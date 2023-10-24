export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name : string, sellIn : number, quality : number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class CustomItem extends Item {
  constructor(name : string, sellIn : number, quality : number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    // meaning the sellin has not passed - move to next check
    if(this.quality > 0){
      // means the sellin has passed and has to degrade twice
      if(this.sellIn < 1 && this.quality > 1) {
        this.quality -= 2;
      } else {
        this.quality -= 1;
      }
    }
    this.sellIn = this.sellIn - 1;
    return new Item(this.name, this.sellIn, this.quality)
  }
}

export class AgedBrie extends Item {
  constructor(name : string, sellIn : number, quality : number) {
    super(name, sellIn, quality);
  }

  updateQuality(){
    if(this.quality < 50){
      this.quality += 1;
    }
    this.sellIn -= 1;
    return new Item(this.name, this.sellIn, this.quality)
  }
}

export class BackstageItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality < 50) {
      if (this.sellIn < 0) {
        this.quality = 0;
      } else if (this.sellIn < 6) {
        this.quality = Math.min(50, this.quality + 3);
      } else if (this.sellIn < 11) {
        this.quality = Math.min(50, this.quality + 2);
      } else {
        this.quality = Math.min(50, this.quality + 1);
      }
    }
    this.sellIn -= 1;
    return new Item(this.name, this.sellIn, this.quality);
  }
}


export class ConjuredItem extends Item {
  constructor(name : string, sellIn : number, quality : number) {
    super(name, sellIn, quality);
  }

  updateQuality(){
    if(this.quality > 0){
      this.quality -= 2;
    }
    this.sellIn = this.sellIn - 1;
    return new Item(this.name,this.sellIn,this.quality);
  }
}

export class LegendaryItem extends Item {
  constructor(name : string, sellIn : number, quality : number) {
    super(name, sellIn, quality);
  }

  updateQuality(){
    return new Item(this.name,this.sellIn,this.quality);
  }
}

export class GildedRose {
  items : Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(){
    for (let i = 0; i < this.items.length; i++){
      let name = this.items[i].name;
      let sellIn = this.items[i].sellIn;
      let quality = this.items[i].quality;

      switch(name) {
        case 'Aged Brie':
          this.items[i] = new AgedBrie(name, sellIn, quality).updateQuality();
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.items[i] = new BackstageItem(name, sellIn, quality).updateQuality();
          break;
        case 'Sulfuras, Hand of Ragnaros':
          this.items[i] = new LegendaryItem(name, sellIn, quality).updateQuality();
          break;
        case 'Conjured Items':
          this.items[i] = new ConjuredItem(name, sellIn, quality).updateQuality();
          break;
        default:
          this.items[i] = new CustomItem(name, sellIn, quality).updateQuality();
      }
    }
    return this.items;
  }
}


// export class Item {
//   name: string;
//   sellIn: number;
//   quality: number;

//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// export class GildedRose {
//   items: Array<Item>;

//   constructor(items = [] as Array<Item>) {
//     this.items = items;
//   }

//   updateQuality() {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.items[i].quality > 0) {
//           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//             this.items[i].quality = this.items[i].quality - 1
//           }
//         }
//       } else {
//         if (this.items[i].quality < 50) {
//           this.items[i].quality = this.items[i].quality + 1
//           if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].sellIn < 11) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1
//               }
//             }
//             if (this.items[i].sellIn < 6) {
//               if (this.items[i].quality < 50) {
//                 this.items[i].quality = this.items[i].quality + 1
//               }
//             }
//           }
//         }
//       }
//       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//         this.items[i].sellIn = this.items[i].sellIn - 1;
//       }
//       if (this.items[i].sellIn < 0) {
//         if (this.items[i].name != 'Aged Brie') {
//           if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
//             if (this.items[i].quality > 0) {
//               if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
//                 this.items[i].quality = this.items[i].quality - 1
//               }
//             }
//           } else {
//             this.items[i].quality = this.items[i].quality - this.items[i].quality
//           }
//         } else {
//           if (this.items[i].quality < 50) {
//             this.items[i].quality = this.items[i].quality + 1
//           }
//         }
//       }
//     }

//     return this.items;
//   }
// }
