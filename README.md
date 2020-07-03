# forlog
Preparing an angular project linked to my firebase account for a forum and web blog combined web app but I have encountered an issue with one function
this.afu.createUserWithEmailAndPassword(email, password).then function
this.authservice.loginWithEmail(this.email, this.password).then(() => function 
those 2 places im facing issues saying then isnt defined properly 
the error in console I get is

ERROR TypeError: Cannot read property 'then' of undefined
    at LoginComponent.login (login.component.ts:34)
    at LoginComponent_Template_form_ngSubmit_3_listener (login.component.html:4)
    at executeListenerWithErrorHandling (core.js:14333)
    at wrapListenerIn_markDirtyAndPreventDefault (core.js:14368)
    at SafeSubscriber.schedulerFn [as _next] (core.js:24605)
    at SafeSubscriber.__tryOrUnsub (Subscriber.js:183)
    at SafeSubscriber.next (Subscriber.js:122)
    at Subscriber._next (Subscriber.js:72)
    at Subscriber.next (Subscriber.js:49)
    at EventEmitter_.next (Subject.js:39)
defaultErrorLogger @ core.js:4073
handleError @ core.js:4121
handleError @ core.js:8681
executeListenerWithErrorHandling @ core.js:14336
wrapListenerIn_markDirtyAndPreventDefault @ core.js:14368
schedulerFn @ core.js:24605
__tryOrUnsub @ Subscriber.js:183
next @ Subscriber.js:122
_next @ Subscriber.js:72
next @ Subscriber.js:49
next @ Subject.js:39
emit @ core.js:24574
onSubmit @ forms.js:4541
NgForm_submit_HostBindingHandler @ forms.js:4574
executeListenerWithErrorHandling @ core.js:14333
wrapListenerIn_markDirtyAndPreventDefault @ core.js:14368
(anonymous) @ platform-browser.js:582
invokeTask @ zone-evergreen.js:399
onInvokeTask @ core.js:27175
invokeTask @ zone-evergreen.js:398
runTask @ zone-evergreen.js:167
invokeTask @ zone-evergreen.js:480
invokeTask @ zone-evergreen.js:1621
globalZoneAwareCallback @ zone-evergreen.js:1647

This error is similar for the register component since i copied my register component codes to login errors passed there too if u can help me fix in one place will fix  similarly in other place thanks for the help in advance <3.
