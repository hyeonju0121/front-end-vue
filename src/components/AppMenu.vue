<template>
    <div class="accordion" id="accordionExample">
        <!-- 1 --------------------------------------------------------->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Ch01. Vue 시작
                </button>
            </h2>
            <div id="collapse1" class="accordion-collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">Home</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 2 --------------------------------------------------------->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                    Ch02. Component & Routing
                </button>
            </h2>
            <div id="collapse2" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam01View" class="nav-link">
                                Exam01View : 뷰 컴포넌트(싱글파일)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam02View" class="nav-link">
                                Exam02View : 뷰 컴포넌트(폴더)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam03View" class="nav-link">
                                Exam03View : UI 컴포넌트(공용 및 로컬)</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam04View" class="nav-link">
                                Exam04View : 뷰 이동</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam05View" class="nav-link">
                                Exam05View : 중첩된 라우트</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch02ComponentRouting/Exam06View" class="nav-link">
                                Exam06View : URL 데이터 전달</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         <!-- 3 --------------------------------------------------------->
         <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                    Ch03. Data Binding
                </button>
            </h2>
            <div id="collapse3" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam01Expressions" class="nav-link">
                                Exam01Expressions : 표현식 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam02NotState" class="nav-link">
                                Exam02NotState : 일반 데이터 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam03State" class="nav-link">
                                Exam03State : 상태 데이터 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam04ComputedFunBinding" class="nav-link">
                                Exam04ComputedFunBinding : 계산된 함수 바인딩 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam05AttrBinding" class="nav-link">
                                Exam05AttrBinding : 속성 바인딩 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam06InnerHtmlBinding" class="nav-link">
                                Exam06InnerHtmlBinding : 내부 HTML 바인딩 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam07IfShowBinding" class="nav-link">
                                Exam07IfShowBinding : 보임 여부 바인딩 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam08RepeatBinding" class="nav-link">
                                Exam08RepeatBinding : 반복 바인딩 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam09FormBinding" class="nav-link">
                                Exam09FormBinding : 폼 바인딩 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam10FallthroughAttr" class="nav-link">
                                Exam10FallthroughAttr : 템플릿 루트로 그대로 전달되는 속성 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch03DataBinding/Exam11Slot" class="nav-link">
                                Exam11Slot : 슬롯 바인딩</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 4 --------------------------------------------------------->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                    Ch04. EventHandling & Watch
                </button>
            </h2>
            <div id="collapse4" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam01EventHandling" class="nav-link">
                                Exam01EventHandling : 이벤트 처리 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch04EventHandlingWatch/Exam02Watch" class="nav-link">
                                Exam02Watch : 상태 데이터 변경 감시 </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 5 --------------------------------------------------------->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                    Ch05. Data Delivery
                </button>
            </h2>
            <div id="collapse5" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam01Props" class="nav-link">
                                Exam01Props : 부모에서 자식으로 (prop 방식) </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam02EventEmit" class="nav-link">
                                Exam02EventEmit : 자식에서 부모로 (event 방식) </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch05DataDelivery/Exam03ProvideInject" class="nav-link">
                                Exam03ProvideInject : 전체 하위 컴포넌트에게 데이터 제공 </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 6 --------------------------------------------------------->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                    Ch06. Lifecycle Hook
                </button>
            </h2>
            <div id="collapse6" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch06LifecycleHook/Exam01LifecycleHook" class="nav-link">
                                Exam01LifecycleHook : 컴포넌트의 생명주기 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch06LifecycleHook/Exam02DomElementRef" class="nav-link">
                                Exam02DomElementRef : DOM 엘리먼트 참조 </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 7 --------------------------------------------------------->
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                    Ch07. Vuex State Management
                </button>
            </h2>
            <div id="collapse7" class="accordion-collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Ch07VuexStateManagement/Exam01RootState" class="nav-link">
                                Exam01RootState : 루트 상태(전역 상태) 읽기 및 변경 </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Ch07VuexStateManagement/Exam02CounterState" class="nav-link">
                                Exam02CounterState : counter 상태 (하위 모듈) 읽기 및 변경 </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>