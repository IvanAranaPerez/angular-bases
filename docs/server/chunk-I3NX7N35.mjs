import './polyfills.server.mjs';
import{$ as Se,A as d,B as k,C as Ce,D as Ve,E as p,F as De,G as m,H as Q,I as be,J as T,K as Me,R as Ee,S as ee,U as Ae,V as we,W as j,X as Fe,Y as Ie,a as de,b as he,c as fe,d as O,e as P,f as X,fa as te,g as u,h as E,i as V,j as c,k as _,l as pe,m as me,n as ge,o as ye,p as Y,q as K,r as v,s,t as ve,u as C,v as b,w as D,x as J,y as _e,z as a}from"./chunk-VM4KP5BJ.mjs";import{a as y,b as M}from"./chunk-KRLCULJA.mjs";var ft=[],xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({imports:[te.forRoot(ft),te]});let t=e;return t})();import pt from"crypto";var U=new Uint8Array(256),G=U.length;function ie(){return G>U.length-16&&(pt.randomFillSync(U),G=0),U.slice(G,G+=16)}var l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function Ne(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}import mt from"crypto";var ne={randomUUID:mt.randomUUID};function gt(t,e,n){if(ne.randomUUID&&!e&&!t)return ne.randomUUID();t=t||{};let i=t.random||(t.rng||ie)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return Ne(i)}var A=gt;var Oe=(()=>{let e=class e{addCharacter(i){let r=y({id:A()},i);this.character.push(r)}onDeleteCharacterById(i){this.character=this.character.filter(r=>r.id!==i)}constructor(){this.character=[{id:A(),name:"Pam",jobPosition:"Receptionist"},{id:A(),name:"Angela",jobPosition:"Counter"},{id:A(),name:"Michael Scott",jobPosition:"Reg. Manager"}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=X({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var vt=(t,e)=>({"list-group-item-success":t,"list-group-item-secondary":e});function _t(t,e){if(t&1){let n=Ce();a(0,"li",2)(1,"div")(2,"span"),m(3),d(),a(4,"span"),m(5),d(),m(6," - "),a(7,"span",3),m(8),d()(),a(9,"div")(10,"button",4),p("click",function(){let o=me(n).$implicit,h=De();return ge(h.onDeleteCharacter(o.id))}),m(11,"X"),d()()()}if(t&2){let n=e.$implicit,i=e.index,r=e.last,o=e.even;D("ngClass",Me(4,vt,r,o)),v(3),be("",i+1,". "),v(2),Q(n.name),v(3),Q(n.jobPosition)}}var Pe=(()=>{let e=class e{constructor(){this.characterList=[{name:"Dwight",jobPosition:"Sales"}],this.onDelete=new C}onDeleteCharacter(i){i&&(console.log({id:i}),this.onDelete.emit(i))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-theoffice-list"]],inputs:{characterList:"characterList"},outputs:{onDelete:"onDelete"},decls:5,vars:1,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",3,"ngClass",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center",3,"ngClass"],[1,"text-primary"],[1,"btn","btn-danger",3,"click"]],template:function(r,o){r&1&&(a(0,"h4"),m(1,"Listado"),d(),a(2,"div")(3,"ul",0),_e(4,_t,12,7,"li",1),d()()),r&2&&(v(4),D("ngForOf",o.characterList))},dependencies:[Ae,we],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();var Re=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(K),s(Y))},e.\u0275dir=_({type:e});let t=e;return t})(),Vt=(()=>{let e=class e extends Re{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ye(e)))(o||e)}})(),e.\u0275dir=_({type:e,features:[b]});let t=e;return t})(),Le=new E("NgValueAccessor");var Dt={provide:Le,useExisting:O(()=>q),multi:!0};function bt(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Mt=new E("CompositionEventMode"),q=(()=>{let e=class e extends Re{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!bt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(K),s(Y),s(Mt,8))},e.\u0275dir=_({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(f){return o._handleInput(f.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(f){return o._compositionEnd(f.target.value)})},features:[T([Dt]),b]});let t=e;return t})();var $e=new E("NgValidators"),We=new E("NgAsyncValidators");function qe(t){return t!=null}function ze(t){return Ve(t)?de(t):t}function Ze(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Xe(t,e){return e.map(n=>n(t))}function Et(t){return!t.validate}function Ye(t){return t.map(e=>Et(e)?e:n=>e.validate(n))}function At(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){return Ze(Xe(n,e))}}function oe(t){return t!=null?At(Ye(t)):null}function wt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){let i=Xe(n,e).map(ze);return fe(i).pipe(he(Ze))}}function se(t){return t!=null?wt(Ye(t)):null}function ke(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ft(t){return t._rawValidators}function It(t){return t._rawAsyncValidators}function re(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function Te(t,e){let n=re(e);return re(t).forEach(r=>{B(n,r)||n.push(r)}),n}function je(t,e){return re(e).filter(n=>!B(t,n))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},F=class extends R{get formDirective(){return null}get path(){return null}},N=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},St={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ui=M(y({},St),{"[class.ng-submitted]":"isSubmitted"}),Ke=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(N,2))},e.\u0275dir=_({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[b]});let t=e;return t})(),Je=(()=>{let e=class e extends L{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(F,10))},e.\u0275dir=_({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&J("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[b]});let t=e;return t})();var I="VALID",H="INVALID",w="PENDING",S="DISABLED";function Qe(t){return(z(t)?t.validators:t)||null}function xt(t){return Array.isArray(t)?oe(t):t||null}function et(t,e){return(z(e)?e.asyncValidators:t)||null}function Nt(t){return Array.isArray(t)?se(t):t||null}function z(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ot(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new P(1e3,"");if(!i[n])throw new P(1001,"")}function Pt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new P(1002,"")})}var $=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===H}get pending(){return this.status==w}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Te(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=w,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(M(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(M(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===w)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;let n=ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(H)?H:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=xt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Nt(this._rawAsyncValidators)}},W=class extends ${constructor(e,n,i){super(Qe(n),et(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Pt(this,!0,e),Object.keys(e).forEach(i=>{Ot(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ae=new E("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function kt(t,e){return[...e.path,t]}function tt(t,e,n=le){it(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),jt(t,e),Ut(t,e),Gt(t,e),Tt(t,e)}function Ge(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Tt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function it(t,e){let n=Ft(t);e.validator!==null?t.setValidators(ke(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=It(t);e.asyncValidator!==null?t.setAsyncValidators(ke(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ge(e._rawValidators,r),Ge(e._rawAsyncValidators,r)}function jt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&nt(t,e)})}function Gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&nt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function nt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ut(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Ht(t,e){t==null,it(t,e)}function Bt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Rt(t){return Object.getPrototypeOf(t.constructor)===Vt}function Lt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $t(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===q?n=o:Rt(o)?i=o:r=o}),r||i||n||null}var Wt={provide:F,useExisting:O(()=>ue)},x=(()=>Promise.resolve())(),ue=(()=>{let e=class e extends F{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new C,this.form=new W({},oe(i),se(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){x.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),tt(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){x.then(()=>{let r=this._findContainer(i.path),o=new W({});Ht(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){x.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){x.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Lt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(s($e,10),s(We,10),s(ae,8))},e.\u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(f){return o.onSubmit(f)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([Wt]),b]});let t=e;return t})();function Ue(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function He(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var qt=class extends ${constructor(e=null,n,i){super(Qe(n),et(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(n)&&(n.nonNullable||n.initialValueIsDefault)&&(He(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){He(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var zt={provide:N,useExisting:O(()=>ce)},Be=(()=>Promise.resolve())(),ce=(()=>{let e=class e extends N{constructor(i,r,o,h,f,ht){super(),this._changeDetectorRef=f,this.callSetDisabledState=ht,this.control=new qt,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=$t(this,h)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Bt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){tt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Be.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ee(r);Be.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?kt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(s(F,9),s($e,10),s(We,10),s(Le,10),s(ve,8),s(ae,8))},e.\u0275dir=_({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([zt]),b,pe]});let t=e;return t})(),rt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Zt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({imports:[Zt]});let t=e;return t})();var ot=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:ae,useValue:i.callSetDisabledState??le}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({imports:[Xt]});let t=e;return t})();var st=(()=>{let e=class e{constructor(){this.onNewCharacter=new C,this.character={name:"",jobPosition:""}}addCharacter(){console.log(this.character),this.character.name.length!==0&&(this.onNewCharacter.emit(this.character),this.character={name:"",jobPosition:""})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-character-form"]],outputs:{onNewCharacter:"onNewCharacter"},decls:7,vars:2,consts:[["action","",1,"row",3,"ngSubmit"],["type","text","name","name","placeholder","Nombre",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["type","text","name","jobPosition","placeholder","Puesto",1,"form-control","mt-2",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","mt-2",3,"click"]],template:function(r,o){r&1&&(a(0,"h4"),m(1,"Agregar Personaje"),d(),a(2,"form",0),p("ngSubmit",function(){return o.addCharacter}),a(3,"input",1),p("ngModelChange",function(f){return o.character.name=f}),d(),a(4,"input",2),p("ngModelChange",function(f){return o.character.jobPosition=f}),d(),a(5,"button",3),p("click",function(){return o.addCharacter()}),m(6,"Agregar"),d()()),r&2&&(v(3),D("ngModel",o.character.name),v(1),D("ngModel",o.character.jobPosition))},dependencies:[rt,q,Ke,Je,ce,ue]});let t=e;return t})();var at=(()=>{let e=class e{constructor(i){this.officeService=i}get Character(){return[...this.officeService.character]}onDeleteCharacter(i){this.officeService.onDeleteCharacterById(i)}onNewCharacter(i){this.officeService.addCharacter(i)}};e.\u0275fac=function(r){return new(r||e)(s(Oe))},e.\u0275cmp=V({type:e,selectors:[["app-theoffice-main-page"]],decls:8,vars:1,consts:[[1,"row"],[1,"col"],[3,"characterList","onDelete"],[3,"onNewCharacter"]],template:function(r,o){r&1&&(a(0,"h1"),m(1,"Dunder Mifflin Paper Inc"),d(),k(2,"hr"),a(3,"div",0)(4,"div",1)(5,"app-theoffice-list",2),p("onDelete",function(f){return o.onDeleteCharacter(f)}),d()(),a(6,"div",1)(7,"app-character-form",3),p("onNewCharacter",function(f){return o.onNewCharacter(f)}),d()()()),r&2&&(v(5),D("characterList",o.Character))},dependencies:[Pe,st],encapsulation:2});let t=e;return t})();var Z=(()=>{let e=class e{constructor(){this.title="Mi primera app de angular"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=V({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&k(0,"app-theoffice-main-page")},dependencies:[at]});let t=e;return t})();var lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({imports:[j]});let t=e;return t})();var ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e}),e.\u0275inj=u({imports:[j,ot]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e,bootstrap:[Z]}),e.\u0275inj=u({providers:[Ie()],imports:[Fe,lt,ut,xe,ct]});let t=e;return t})();var Qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c({type:e,bootstrap:[Z]}),e.\u0275inj=u({imports:[dt,Se]});let t=e;return t})();export{Qt as a};