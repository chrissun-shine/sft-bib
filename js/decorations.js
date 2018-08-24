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
  detailsHtml: function() {
    return $('<div class="proj"></div>')
      .append('<div><b>Address: </b><span>' + this.get('addr') + '</span></div>')
      .append('<div><b>Agency: </b><span>' + this.get('agy') + '</span></div>')
      .append('<div><b>Grant: </b><span>' + this.get('grt') + '</span></div>')
      .append('<div><b>Project Type: </b><span>' + this.get('typ') + '</span></div>')
      .append('<div><b>Est. Funded Damages: </b>$<span>' + this.get('dmg') + '</span></div>')
      .append('<div><b>Council District: </b><span>' + this.get('cd') + '</span></div>');
  },
  html: function() {
    return $('<div></div>')
      .append(this.nameHtml())
      .append(this.detailsHtml())
      .append(this.mapButton());
  }
};