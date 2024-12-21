"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98849],{59543:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>s,data:()=>o});var n=i(6254);const a={},s=(0,i(89596).A)(a,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[11]||(t[11]=(0,n.Lk)("h1",{id:"ikea-e1525-e1745",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ikea-e1525-e1745"},[(0,n.Lk)("span",null,"IKEA E1525/E1745")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"E1525/E1745")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("IKEA")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"TRADFRI motion sensor")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"occupancy, illuminance_above_threshold, requested_brightness_level, requested_brightness_percent, identify, battery, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1525-E1745.png",alt:"IKEA E1525/E1745"})])],-1))])]),t[12]||(t[12]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair the sensor to Zigbee2MQTT by long pressing the pair button for more than 10 seconds. The red light on the front side should flash a few times and then turn off. If the light red light does not show up and batteries are OK, try pressing the pair button 4 short times. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h3><h4 id="warning-you-need-to-activate-the-motion-sensor-and-then-immediately-press-bind-in-the-zigbee2mqtt-interface-if-the-sensor-is-sleeping-the-bind-will-fail-credits-issue-3831" tabindex="-1"><a class="header-anchor" href="#warning-you-need-to-activate-the-motion-sensor-and-then-immediately-press-bind-in-the-zigbee2mqtt-interface-if-the-sensor-is-sleeping-the-bind-will-fail-credits-issue-3831"><span>Warning! You need to activate the motion sensor and then immediately press bind in the Zigbee2MQTT interface. If the sensor is sleeping the bind will fail. credits: <a href="https://github.com/Koenkk/zigbee2mqtt/issues/3831" target="_blank" rel="noopener noreferrer">issue #3831</a></span></a></h4><p>The E1745 can be bound to groups. Although it is not possible to set the groupID at which the E1745 sends messages. But you can watch out in the log files for following debug messages:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">debug Received Zigbee message from &#39;device&#39;, type &#39;commandOnWithTimedOff&#39;, cluster &#39;genOnOff&#39;, data &#39;{&quot;ctrlbits&quot;:0,&quot;offwaittime&quot;:0,&quot;ontime&quot;:600}&#39; from endpoint 1 with groupID 123</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now you can create a group with a groupID of 123 and add your devices that should receive the message.</p><h3 id="occupancy-timeout-option" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-option"><span>occupancy_timeout option</span></a></h3><p>Setting occupancy_timeout option to a value of fewer than 90 seconds will clear the occupancy flag, but will leave the sensor unresponsive till 90 seconds elapse. credits: <a href="https://github.com/Koenkk/zigbee2mqtt/issues/13259" target="_blank" rel="noopener noreferrer">issue #13259</a></p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',11)),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,n.eW)("."))]),t[13]||(t[13]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[10]||(t[10]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,n.Fv)('<ul><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li><li><p><code>occupancy_timeout</code>: Time in seconds after which occupancy is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>illuminance_below_threshold_check</code>: Set to false to also send messages when illuminance is above threshold in night mode (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-above-threshold-binary" tabindex="-1"><a class="header-anchor" href="#illuminance-above-threshold-binary"><span>Illuminance above threshold (binary)</span></a></h3><p>Indicates whether the device detected bright light (works only in night mode). Value can be found in the published state on the <code>illuminance_above_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> illuminance above threshold is ON, if <code>false</code> OFF.</p><h3 id="requested-brightness-level-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-level-numeric"><span>Requested brightness level (numeric)</span></a></h3><p>Value can be found in the published state on the <code>requested_brightness_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>76</code> and the maximum value is <code>254</code>.</p><h3 id="requested-brightness-percent-numeric" tabindex="-1"><a class="header-anchor" href="#requested-brightness-percent-numeric"><span>Requested brightness percent (numeric)</span></a></h3><p>Value can be found in the published state on the <code>requested_brightness_percent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>30</code> and the maximum value is <code>100</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16))])}]]),o=JSON.parse('{"path":"/devices/E1525_E1745.html","title":"IKEA E1525/E1745 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E1525/E1745 control via MQTT","description":"Integrate your IKEA E1525/E1745 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"occupancy_timeout option","slug":"occupancy-timeout-option","link":"#occupancy-timeout-option","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance above threshold (binary)","slug":"illuminance-above-threshold-binary","link":"#illuminance-above-threshold-binary","children":[]},{"level":3,"title":"Requested brightness level (numeric)","slug":"requested-brightness-level-numeric","link":"#requested-brightness-level-numeric","children":[]},{"level":3,"title":"Requested brightness percent (numeric)","slug":"requested-brightness-percent-numeric","link":"#requested-brightness-percent-numeric","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734727521000},"filePathRelative":"devices/E1525_E1745.md"}')}}]);