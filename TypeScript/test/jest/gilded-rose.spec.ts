// import { Item, GildedRose } from '@/gilded-rose';

// describe('Gilded Rose', () => {
//   it('should foo', () => {
//     const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toBe('fixme');
//   });
// });

import { CustomItem, AgedBrie, BackstageItem, ConjuredItem, LegendaryItem } from '@/gilded-rose';
describe(' Update Quality', () => {
  describe('Custom Item', () => {
    it('Should decrease the quality and sellin by 1 when sellin is greater than 0', () => {
      const customItem = new CustomItem('Normal Item', 10, 10);
      const item = customItem.updateQuality();
      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(9);
      const item1 = customItem.updateQuality();
      expect(item1.sellIn).toBe(8);
      expect(item1.quality).toBe(8);
    });
    it('Should decrease quality by 2 and sellin by 1 when sellin is less than 0', () => {
      const customItem = new CustomItem('Normal Item', -1, 10);
      const item = customItem.updateQuality();
      expect(item.sellIn).toBe(-2);
      expect(item.quality).toBe(8);
    });
    // (sellin, quality)
    it('Should decrease quality by 2 and sellin by 1 when sellin is less than 0', () => {
      const customItem = new CustomItem('Normal Item', -1, 0);
      const item = customItem.updateQuality();
      expect(item.sellIn).toBe(-2);
      expect(item.quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    // (sellin, quality)
    it('Should increase quality by 1 and decrease sellin by 1', () => {
      const agedBrie = new AgedBrie('Aged Brie', 10, 10);
      const item = agedBrie.updateQuality();
      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(11);
    });
    it('Should increase quality by 1 and decrease sellin by 1', () => {
      const agedBrie = new AgedBrie('Aged Brie', 0, 10);
      const item = agedBrie.updateQuality();
      expect(item.sellIn).toBe(-1);
      expect(item.quality).toBe(11);
    });
  });
  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('Should increase quality by 1 and descrease sellin by 1 when sellin is greater than 10', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 11, 10);
      const item = backstageItem.updateQuality();
      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(11);
    });
    it('Should increase quality by 2 and descrease sellin by 1 when sellin is 10 or less', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 10, 10);
      const item = backstageItem.updateQuality();
      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(12);
    });
    it('Should increase quality by 3 and descrease sellin by 1 when sellin is 5 or less', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 5, 10);
      const item = backstageItem.updateQuality();
      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(13);
    });
    it('Should set quality to 0 when sellin is less than 0', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', -1, 10);
      const item = backstageItem.updateQuality();
      expect(item.sellIn).toBe(-2);
      expect(item.quality).toBe(0);
    });
    it('Should not increase quality beyond 50', () => {
      const backstageItem = new BackstageItem('Backstage passes to a TAFKAL80ETC concert', 5, 50);
      const item = backstageItem.updateQuality();
      expect(item.sellIn).toBe(4);
      expect(item.quality).toBe(50);
    });
  });
  describe('Sulfuras, Hand of Ragnaros', () => {
    it('Should not change quality and sellin', () => {
      const legendaryItem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 10, 10);
      const item = legendaryItem.updateQuality();
      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(10);
    });
  });
  describe('Conjured Items', () => {
    it('Should decrease quality by 2 and sellin by 1 when sellin is greater than 0', () => {
      const conjuredItem = new ConjuredItem('Conjured Items', 10, 10);
      const item = conjuredItem.updateQuality();
      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(8);
    });
  });
});
