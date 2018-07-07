# Exercise2

1. Валидация форм и асинхронная валидация (см. asyncUserExistValidator)
2. Работа с директивой для доступа к DOM компонента
<label [class]="fn.activeClasses">
            First Name<span class="req">*</span>
          </label>
          <input type="text" required autocomplete="off" [appActiveHighlight]="'active hightlight'"  #fn='highlight' autocomplete="off"   formControlName="firstName"/>

В input директивы записываем строку 'active hightlight' , затем ее экземпляр получаем по #fn='highlight' (exportAs), затем ее используем для условного отображения классов label [class]="fn.activeClasses"