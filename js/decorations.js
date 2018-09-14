var featuresByGrant = {};

var decorations = {
  extendFeature: function() {
    var grant = this.get('grt');
    featuresByGrant[grant] = featuresByGrant[grant] || [];
    featuresByGrant[grant].push(this);
  },
  getName: function() {
    return this.get('name');
  },

  getDmg: function() {
    var dmg = new Number(this.get('dmg'));
    comdmg = dmg.toLocaleString('en-US', {
      currency: 'USD',
      style: 'currency',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    });
    return $('<div class="proj"></div>')
    .append('<div><b>Est. Funded Damages: </b><span>' + comdmg + '</span></div>');
  },

  detailsHtml: function() {
    return $('<div class="proj"></div>')
      .append('<div><b>ID: </b><span>' + this.get('id') + '</span></div>')
      .append('<div><b>Address: </b><span>' + this.get('addr') + '</span></div>')
      .append('<div><b>Agency: </b><span>' + this.get('agy') + '</span></div>')
      .append('<div><b>Funding Source: </b><span>' + this.get('fnd') + '</span></div>')
      .append('<div><b>Grant: </b><span>' + this.get('grt') + '</span></div>')
      .append('<div><b>Project Type: </b><span>' + this.get('typ') + '</span></div>')
      .append(this.getDmg())
      .append('<div><b>City Council District: </b><span>' + this.get('cd') + '</span></div>')
      .append('<div><b>Community District: </b><span>' + this.get('cm') + '</span></div>');
  },
  html: function() {
    return $('<div></div>')
      .append(this.nameHtml())
      .append(this.detailsHtml())
      .append(this.mapButton());
  }
}; 