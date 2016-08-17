// Generated by CoffeeScript 1.7.1
(function() {
  define(['aloha', 'aloha/plugin', 'jquery', 'aloha/ephemera', 'semanticblock/semanticblock-plugin', './languages', 'css!metadata/css/metadata-plugin.css'], function(Aloha, Plugin, $, Ephemera, SemanticBlock, languages) {
    var AUTHORS_TEMPLATE, COPYRIGHT_TEMPLATE, DESCRIPTION_TEMPLATE, EDITORS_TEMPLATE, ILLUSTRATORS_TEMPLATE, KEYWORDS_TEMPLATE, LANGUAGE_TEMPLATE, LICENCE_TEMPLATE, METADATA_MODAL, METADATA_TEMPLATE, PUBLISHERS_TEMPLATE, SUBJECTS_TEMPLATE, TITLE_TEMPLATE, TRANSLATORS_TEMPLATE, elements, plugin;
    METADATA_MODAL = '<div id="module-metadata-modal" class="modal fade" tabindex="-1" role="dialog" style="width: 660px;">\n  <div class="modal-header">\n    <button type="button" class="close" data-cancel aria-hidden="true">×</button>\n    <h3>Edit the authors and other metadata on this module</h3>\n  </div>\n  <div class="modal-body" style="max-height: 435px;">\n\n    <form>\n      <h4 style="display:inline-block;">Title (required):</h4>\n      <h4 style="display:inline-block;" class="toc-color" data-edit-toggle>\n        <span data-title>title title title</span>\n        <small><em>click to edit</em></small>\n      </h4>\n      <input\n        type="text"\n        name="title"\n        style="display: none;"\n        class="input-xlarge">\n    </form>\n\n    <ul class="nav nav-tabs">\n      <li class="active"><a href="#module-metadata-about" data-toggle="tab">About</a></li>\n      <li><a href="#module-metadata-authors" data-toggle="tab">Authors</a></li>\n      <li><a href="#module-metadata-summary" data-toggle="tab">Summary</a></li>\n    </ul>\n\n    <form class="form-horizontal">\n      <div class="tab-content">\n        <div class="tab-pane active" id="module-metadata-about" style="width: 560px;">\n          <div class="control-group">\n            <label class="control-label"> Subject </label>\n            <div class="controls">\n              <input\n                type="text"\n                name="subject"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label"> Language </label>\n            <div class="controls">\n              <select name="language">\n              </select>\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label"> Keywords </label>\n            <div class="controls">\n              <input\n                type="text"\n                name="keywords"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label"> Licence </label>\n            <div class="controls">\n              <select name="rights">\n                <option value="">Choose a license</option>\n                <option value="http://creativecommons.org/licenses/by/3.0/">\n                  Creative Commons Attribution - CC-BY</option>\n                <option value="http://creativecommons.org/licenses/by-nd/3.0/">\n                  Creative Commons Attribution-NoDerivs - CC BY-ND</option>\n                <option value="http://creativecommons.org/licenses/by-sa/3.0/">\n                  Creative Commons Attribution-ShareAlike - CC BY-SA</option>\n                <option value="http://creativecommons.org/licenses/by-nc/3.0/">\n                  Creative Commons Attribution-NonCommercial - CC BY-NC</option>\n                <option value="http://creativecommons.org/licenses/by-nc-sa/3.0/">\n                  Creative Commons Attribution-NonCommercial-ShareAlike - CC BY-NC-SA</option>\n                <option value="http://creativecommons.org/licenses/by-nc-nd/3.0/">\n                  Creative Commons Attribution-NonCommercial-NoDerivs - CC BY-NC-ND</option>\n                <option value="http://creativecommons.org/publicdomain/">\n                  Public domain</option>\n                <option>other</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class="tab-pane" id="module-metadata-authors">\n          <div class="control-group">\n            <label class="control-label">Authors</label>\n            <div class="controls">\n              <input\n                type="text"\n                name="authors"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label">Copyright Holders</label>\n            <div class="controls">\n              <input\n                type="text"\n                name="rights-holders"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label">Publisher (optional)</label>\n            <div class="controls">\n              <input\n                type="text"\n                name="publishers"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label">Editors (optional)</label>\n            <div class="controls">\n              <input\n                type="text"\n                name="editors"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label">Translators (optional)</label>\n            <div class="controls">\n              <input\n                type="text"\n                name="translators"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n          <div class="control-group">\n            <label class="control-label">Illustrator (optional)</label>\n            <div class="controls">\n              <input\n                type="text"\n                name="illustrators"\n                data-role="tagsinput"\n                placeholder="Use comma, or tab to separate   "\n              >\n            </div>\n          </div>\n        </div>\n        <div class="tab-pane" id="module-metadata-summary">\n          <div class="control-group">\n            <label class="control-label">Summary</label>\n            <div class="controls">\n              <textarea name="description" rows="10" class="span5"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class="modal-footer">\n    <button class="btn" data-cancel>Close without saving</button>\n    <button class="btn" data-save>Close and save</button>\n    <button class="btn" data-tab-next>Next</button>\n  </div>\n</div>';
    TITLE_TEMPLATE = '<h1 data-type="title" itemprop="name"></h1>';
    AUTHORS_TEMPLATE = '<div class="authors">\n  By:\n  <span itemscope="itemscope" itemtype="http://schema.org/Person" data-type="author" itemprop="author"></span>\n</div>';
    EDITORS_TEMPLATE = '<div class="editors">\n  Edited by:\n  <span data-type="editor" itemprop="editor"></span>\n</div>';
    ILLUSTRATORS_TEMPLATE = '<div class="illustrators">\n  Illustrated by:\n  <span data-type="illustrator" itemprop="illustrator"></span>\n</div>';
    TRANSLATORS_TEMPLATE = '<div class="translators">\n  Translated by: \n  <span data-type="translator" itemprop="contributor"></span>\n</div>';
    PUBLISHERS_TEMPLATE = '<div class="publishers">\n  Published by: \n  <span data-type="publisher" itemprop="publisher"></span>\n</div>';
    COPYRIGHT_TEMPLATE = '<div class="copyright">\n  Copyright: \n  <span data-type="copyright-holder" itemprop="copyrightHolder"></span>\n</div>';
    LICENCE_TEMPLATE = '<div class="license">\n  Licensed:\n  <a data-type="license" rel="license" href=""></a>\n</div>';
    KEYWORDS_TEMPLATE = '<div class="keywords">\n  Keywords:\n  <span data-type="keyword" itemprop="keywords"></span>\n</div>';
    SUBJECTS_TEMPLATE = '<div class="subject">\n  Subject:\n  <span data-type="subject" itemprop="about"></span>\n</div>';
    DESCRIPTION_TEMPLATE = '<div data-type="description" itemprop="description" class="description">\n  <p class="summary"></p>\n</div>';
    LANGUAGE_TEMPLATE = '<meta data-type="language" itemprop="inLanguage" content="" />';
    METADATA_TEMPLATE = '<div\n  data-type="metadata"\n  itemscope="itemscope"\n  itemtype="http://schema.org/CreativeWork">\n</div>';
    elements = {
      title: {
        selector: 'h1[data-type="title"]',
        hasMany: false
      },
      authors: {
        selector: '.authors span',
        hasMany: true
      },
      editors: {
        selector: '.editors span',
        hasMany: true
      },
      illustrators: {
        selector: '.illustrators span',
        hasMany: true
      },
      translators: {
        selector: '.translators span',
        hasMany: true
      },
      publishers: {
        selector: '.publishers span',
        hasMany: true
      },
      rightsHolders: {
        selector: '.copyright span',
        hasMany: true
      },
      rightsUrl: {
        selector: '.license a',
        hasMany: false,
        prop: 'href'
      },
      language: {
        selector: '[data-type="language"]',
        hasMany: false,
        prop: 'content'
      },
      keywords: {
        selector: '.keywords span',
        hasMany: true
      },
      subjects: {
        selector: '.subject span',
        hasMany: true
      },
      description: {
        selector: '.description p',
        hasMany: false
      }
    };
    return plugin = Plugin.create('metadata', {
      _selector: '[data-type="metadata"]',
      $_editable: null,
      $_element: null,
      _showModal: function() {
        var $languageSelect, $modal, key, label, metadata;
        $modal = $('#module-metadata-modal');
        if (!$modal.length) {
          $modal = $(METADATA_MODAL);
        }
        $languageSelect = $modal.find('select[name="language"]');
        for (key in languages) {
          label = languages[key];
          $('<option></option>').attr('value', key).text(label).appendTo($languageSelect);
        }
        metadata = this._readMetadata();
        $modal.find('[name="title"]').val(metadata.title);
        $modal.find('[name="language"]').val(metadata.language);
        $modal.find('[name="description"]').val(metadata.description);
        $modal.find('[name="language"]').val(metadata.language || 'en');
        $modal.find('[name="rights"]').val(metadata.rightsUrl);
        $modal.find('[data-role="tagsinput"]').each(function() {
          if (!$(this).data('tagsinput')) {
            $(this).tagsinput({
              confirmKeys: [13, 188, 9]
            });
          }
          return $(this).tagsinput('removeAll');
        });
        _.each(metadata.subjects, function(subject) {
          return $modal.find('[name="subject"]').tagsinput('add', subject);
        });
        _.each(metadata.keywords, function(keyword) {
          return $modal.find('[name="keywords"]').tagsinput('add', keyword);
        });
        _.each(metadata.rightsHolders, function(rightsHolder) {
          return $modal.find('[name="rights-holders"]').tagsinput('add', rightsHolder);
        });
        _.each(metadata.authors, function(author) {
          return $modal.find('[name="authors"]').tagsinput('add', author);
        });
        _.each(metadata.publishers, function(publisher) {
          return $modal.find('[name="publishers"]').tagsinput('add', publisher);
        });
        _.each(metadata.editors, function(editor) {
          return $modal.find('[name="editors"]').tagsinput('add', editor);
        });
        _.each(metadata.translators, function(translator) {
          return $modal.find('[name="translators"]').tagsinput('add', translator);
        });
        _.each(metadata.illustrators, function(illustrator) {
          return $modal.find('[name="illustrators"]').tagsinput('add', illustrator);
        });
        $modal.find('.nav.nav-tabs li:first a').click();
        $modal.find('[data-edit-toggle]').off('click').click(function() {
          return $(this).hide().siblings('input').show().focus();
        }).siblings('input').off('blur').blur(function() {
          return $(this).hide().siblings('[data-edit-toggle]').show().find('[data-title]').text($(this).val());
        }).trigger('blur');
        $modal.find('a[data-toggle="tab"]').off('shown').on('shown', function(e) {
          if ($(e.target).parents('li').next().length) {
            return $modal.find('[data-tab-next]').show();
          } else {
            return $modal.find('[data-tab-next]').hide();
          }
        });
        $modal.find('[data-cancel]').off('click').click(function() {
          if (confirm('Are you sure you want to close without saving? The title, authors, and other information about this book will retain their previous values.')) {
            return $modal.modal('hide');
          }
        });
        $modal.find('[data-tab-next]').off('click').click(function() {
          var next;
          next = $modal.find('.nav li.active').next();
          if (next.length) {
            return next.find('a').click();
          }
        });
        $modal.modal({
          show: true
        });
        return $modal.find('[data-save]').off('click').click((function(_this) {
          return function() {
            var now, rights, rightsUrl;
            rightsUrl = $modal.find('[name="rights"]').val();
            if (rightsUrl.length) {
              rights = $modal.find('[name="rights"] option[value="' + rightsUrl + '"]').text().trim();
            } else {
              rights = '';
            }
            now = new Date();
            _this._setMetadata({
              title: $modal.find('[name="title"]').val(),
              description: $modal.find('[name="description"]').val(),
              language: $modal.find('[name="language"]').val(),
              rights: rights,
              rightsUrl: rightsUrl,
              dateModified: "" + (now.getFullYear()) + "-" + (now.getMonth() + 1) + "-" + (now.getDate()),
              subjects: $modal.find('[name="subject"]').val().split(',').filter(function(i) {
                return i;
              }),
              keywords: $modal.find('[name="keywords"]').val().split(',').filter(function(i) {
                return i;
              }),
              rightsHolders: $modal.find('[name="rights-holders"]').val().split(',').filter(function(i) {
                return i;
              }),
              authors: $modal.find('[name="authors"]').val().split(',').filter(function(i) {
                return i;
              }),
              publishers: $modal.find('[name="publishers"]').val().split(',').filter(function(i) {
                return i;
              }),
              editors: $modal.find('[name="editors"]').val().split(',').filter(function(i) {
                return i;
              }),
              translators: $modal.find('[name="translators"]').val().split(',').filter(function(i) {
                return i;
              }),
              illustrators: $modal.find('[name="illustrators"]').val().split(',').filter(function(i) {
                return i;
              })
            });
            return $modal.modal('hide');
          };
        })(this));
      },
      _readMetadata: function() {
        var entry, getValue, hasMany, key, metadata, selector;
        if (this.metadata) {
          return this.metadata;
        }
        metadata = {};
        for (key in elements) {
          entry = elements[key];
          selector = entry.selector;
          hasMany = entry.hasMany;
          getValue = function(element) {
            if (entry.prop) {
              return element.attr(entry.prop);
            } else {
              return element.text();
            }
          };
          if (hasMany) {
            metadata[key] = [];
            this.$_element.find(selector).each(function() {
              return metadata[key].push(getValue($(this)));
            });
          } else {
            metadata[key] = getValue(this.$_element.find(selector));
          }
        }
        return this.metadata = metadata;
      },
      _setMetadata: function(metadata) {
        var $description, _base, _base1;
        this.metadata = JSON.parse(JSON.stringify(metadata));
        this.$_element.empty();
        if (typeof (_base = this.settings).setMetadata === "function") {
          _base.setMetadata(metadata);
        }
        if (typeof (_base1 = this.settings).filterMetadata === "function") {
          _base1.filterMetadata(metadata);
        }
        if (metadata.title) {
          $(TITLE_TEMPLATE).text(metadata.title).appendTo(this.$_element);
        }
        if (metadata.language) {
          $(LANGUAGE_TEMPLATE).attr('content', metadata.language).appendTo(this.$_element);
        }
        this._setContributors(metadata);
        if (metadata.publishers.length) {
          this._handleGroup(this.$_element, PUBLISHERS_TEMPLATE, metadata.publishers);
        }
        this._setPermissions(metadata);
        if (metadata.keywords.length) {
          this._handleGroup(this.$_element, KEYWORDS_TEMPLATE, metadata.keywords);
        }
        if (metadata.subjects.length) {
          this._handleGroup(this.$_element, SUBJECTS_TEMPLATE, metadata.subjects);
        }
        if (metadata.description) {
          $description = $(DESCRIPTION_TEMPLATE);
          $description.find('.summary').text(metadata.description);
          return $description.appendTo(this.$_element);
        }
      },
      _setContributors: function(contributors) {
        var $wrapper;
        $wrapper = $('<div>').addClass('contributors');
        if (contributors.authors.length) {
          this._handleGroup($wrapper, AUTHORS_TEMPLATE, contributors.authors);
        }
        if (contributors.editors.length) {
          this._handleGroup($wrapper, EDITORS_TEMPLATE, contributors.publishers);
        }
        if (contributors.illustrators.length) {
          this._handleGroup($wrapper, ILLUSTRATORS_TEMPLATE, contributors.illustrators);
        }
        if (contributors.translators.length) {
          this._handleGroup($wrapper, TRANSLATORS_TEMPLATE, contributors.translators);
        }
        if (!$wrapper.is(':empty')) {
          return $wrapper.appendTo(this.$_element);
        }
      },
      _setPermissions: function(permissions) {
        var $rights, $wrapper;
        $wrapper = $('<div>').addClass('permissions');
        if (permissions.rightsHolders.length) {
          this._handleGroup($wrapper, COPYRIGHT_TEMPLATE, permissions.rightsHolders);
        }
        if (permissions.rightsUrl && permissions.rights) {
          $rights = $(LICENCE_TEMPLATE);
          $rights.find('[data-type="license"]').text(permissions.rights);
          $rights.find('[data-type="license"]').attr('href', permissions.rightsUrl);
          $rights.appendTo($wrapper);
        }
        if (!$wrapper.is(':empty')) {
          return $wrapper.appendTo(this.$_element);
        }
      },
      _handleGroup: function($container, template, values) {
        var $groupTemplate, $item, i, value, _i, _len;
        $groupTemplate = $(template);
        $item = $groupTemplate.find('span').clone();
        $groupTemplate.find('span').remove();
        for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
          value = values[i];
          $item.clone().text(value).appendTo($groupTemplate);
          if (values.length > 1 && i !== values.length - 1) {
            $groupTemplate.append(', ');
          }
        }
        return $container.append($groupTemplate);
      },
      initEditable: function(element) {
        var title;
        this.$_editable = element;
        if (!this.$_editable.find(this._selector).length) {
          this.$_editable.prepend($(METADATA_TEMPLATE));
        }
        this.$_element = this.$_editable.find(this._selector);
        this.$_element.attr('contenteditable', false);
        this.$_element.append(this.settings.supplement);
        if (!this.$_element.find(elements.title.selector).length) {
          $(TITLE_TEMPLATE).prependTo(this.$_element);
        }
        if (this.$_element.find('title').length) {
          title = this.$_element.find('title').remove().text();
          this.$_element.find(elements.title.selector).text(title);
        }
        $('body').on('blur', '#module-metadata-modal .bootstrap-tagsinput input', function() {
          var t;
          t = $(this).val();
          if (t) {
            $(this).parent().prev().tagsinput('add', t);
            return $(this).val('');
          }
        });
        return this.$_element.click((function(_this) {
          return function() {
            return _this._showModal();
          };
        })(this));
      },
      extendMetadata: function(newMetadata) {
        var key, metadata, value;
        metadata = plugin._readMetadata();
        for (key in newMetadata) {
          value = newMetadata[key];
          console.log('meta', key, value);
          metadata[key] = value;
        }
        return plugin._setMetadata(metadata);
      },
      init: function() {
        SemanticBlock.ignore('[data-type="metadata"],[data-type="metadata"] *');
        return Aloha.bind('aloha-editable-created', (function(_this) {
          return function(e, params) {
            if (params.obj.is('.aloha-root-editable')) {
              _this.initEditable(params.obj);
              if (_this.settings.getInitialMetadata) {
                return _this.extendMetadata(_this.settings.getInitialMetadata());
              }
            }
          };
        })(this));
      }
    });
  });

}).call(this);