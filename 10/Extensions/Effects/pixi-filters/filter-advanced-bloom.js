/*!
 * @pixi/filter-advanced-bloom - v3.1.1
 * Compiled Wed, 08 Apr 2020 11:09:37 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters=function(t,e,r,o){"use strict";var i="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",l="\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",n=function(t){function e(e){void 0===e&&(e=.5),t.call(this,i,l),this.threshold=e}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={threshold:{configurable:!0}};return r.threshold.get=function(){return this.uniforms.threshold},r.threshold.set=function(t){this.uniforms.threshold=t},Object.defineProperties(e.prototype,r),e}(e.Filter),s="uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",u=function(t){function e(e){t.call(this,i,s),"number"==typeof e&&(e={threshold:e}),e=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:o.settings.RESOLUTION},e),this.bloomScale=e.bloomScale,this.brightness=e.brightness;var l=e.kernels,u=e.blur,a=e.quality,c=e.pixelSize,h=e.resolution;this._extractFilter=new n(e.threshold),this._extractFilter.resolution=h,this._blurFilter=l?new r.KawaseBlurFilter(l):new r.KawaseBlurFilter(u,a),this.pixelSize=c,this.resolution=h}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var l={resolution:{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return e.prototype.apply=function(t,e,r,o,i){var l=t.getFilterTexture();this._extractFilter.apply(t,e,l,1,i);var n=t.getFilterTexture();this._blurFilter.apply(t,l,n,1,i),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=n,t.applyFilter(this,e,r,o),t.returnFilterTexture(n),t.returnFilterTexture(l)},l.resolution.get=function(){return this._resolution},l.resolution.set=function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},l.threshold.get=function(){return this._extractFilter.threshold},l.threshold.set=function(t){this._extractFilter.threshold=t},l.kernels.get=function(){return this._blurFilter.kernels},l.kernels.set=function(t){this._blurFilter.kernels=t},l.blur.get=function(){return this._blurFilter.blur},l.blur.set=function(t){this._blurFilter.blur=t},l.quality.get=function(){return this._blurFilter.quality},l.quality.set=function(t){this._blurFilter.quality=t},l.pixelSize.get=function(){return this._blurFilter.pixelSize},l.pixelSize.set=function(t){this._blurFilter.pixelSize=t},Object.defineProperties(e.prototype,l),e}(e.Filter);return t.AdvancedBloomFilter=u,t}({},PIXI,PIXI.filters,PIXI);Object.assign(PIXI.filters,__filters);
