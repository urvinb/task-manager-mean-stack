(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+4L4":
    /*!********************************************************!*\
      !*** ./src/app/pages/task-view/task-view.component.ts ***!
      \********************************************************/

    /*! exports provided: TaskViewComponent */

    /***/
    function L4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function () {
        return TaskViewComponent;
      });
      /* harmony import */


      var src_app_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/task.service */
      "DK97");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a1) {
        return ["/lists", a1];
      };

      function TaskViewComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var list_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](2, _c0, list_r3._id));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](list_r3.title);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "completed": a0
        };
      };

      var _c2 = function _c2(a1, a3) {
        return ["/lists", a1, "edit-task", a3];
      };

      function TaskViewComponent_div_10_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TaskViewComponent_div_10_div_15_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8);

            var task_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r7.onTaskClick(task_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TaskViewComponent_div_10_div_15_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8);

            var task_r6 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

            return ctx_r9.onDeleteTaskClick(task_r6._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var task_r6 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](3, _c1, task_r6.completed));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](task_r6.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](5, _c2, ctx_r4.selectedListId, task_r6._id));
        }
      }

      function TaskViewComponent_div_10_h3_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "There are no tasks here! Click the add button to create a new task.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      var _c3 = function _c3(a1) {
        return ["/edit-list", a1];
      };

      function TaskViewComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function TaskViewComponent_div_10_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

            return ctx_r10.onDeleteListClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, TaskViewComponent_div_10_div_15_Template, 11, 8, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, TaskViewComponent_div_10_h3_16_Template, 2, 0, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](3, _c3, ctx_r1.selectedListId));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.tasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.tasks.length === 0);
        }
      }

      function TaskViewComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h3", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Please select a list from the sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      var TaskViewComponent = /*#__PURE__*/function () {
        function TaskViewComponent(taskService, route, router) {
          _classCallCheck(this, TaskViewComponent);

          this.taskService = taskService;
          this.route = route;
          this.router = router;
        }

        _createClass(TaskViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              if (params.listId) {
                _this.selectedListId = params.listId;

                _this.taskService.getTasks(params.listId).subscribe(function (tasks) {
                  _this.tasks = tasks;
                });
              } else {
                _this.tasks = undefined;
              }
            });
            this.taskService.getLists().subscribe(function (lists) {
              _this.lists = lists;
            });
          }
        }, {
          key: "onTaskClick",
          value: function onTaskClick(task) {
            // we want to set the task to completed
            this.taskService.complete(task).subscribe(function () {
              // the task has been set to completed successfully
              console.log("Completed successully!");
              task.completed = !task.completed;
            });
          }
        }, {
          key: "onDeleteListClick",
          value: function onDeleteListClick() {
            var _this2 = this;

            this.taskService.deleteList(this.selectedListId).subscribe(function (res) {
              _this2.router.navigate(['/lists']);

              console.log(res);
            });
          }
        }, {
          key: "onDeleteTaskClick",
          value: function onDeleteTaskClick(id) {
            var _this3 = this;

            this.taskService.deleteTask(this.selectedListId, id).subscribe(function (res) {
              _this3.tasks = _this3.tasks.filter(function (val) {
                return val._id !== id;
              });
              console.log(res);
            });
          }
        }]);

        return TaskViewComponent;
      }();

      TaskViewComponent.??fac = function TaskViewComponent_Factory(t) {
        return new (t || TaskViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_0__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      TaskViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: TaskViewComponent,
        selectors: [["app-task-view"]],
        decls: 12,
        vars: 3,
        consts: [[1, "centered-content"], [1, "task-manager-container"], [1, "sidebar", "has-background-white"], [1, "title", "has-text-primary"], [1, "list-menu"], ["class", "list-menu-item", "routerLinkActive", "is-active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/new-list", 1, "button", "is-primary", "has-text-white"], [1, "task-list-container", "has-background-light"], [4, "ngIf"], ["routerLinkActive", "is-active", 1, "list-menu-item", 3, "routerLink"], [1, "top-bar"], [1, "dropdown", "is-hoverable", "is-right"], [1, "dropdown-trigger"], ["aria-haspopup", "true", "aria-controls", "dropdown-menu4", 1, "button"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-cog"], ["id", "dropdown-menu4", "role", "menu", 1, "dropdown-menu"], [1, "dropdown-content"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", "has-text-danger", 3, "click"], ["class", "task", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "empty-state-text", 4, "ngIf"], ["routerLink", "./new-task", 1, "circle-add-button", "button", "is-primary"], ["src", "../../../assets/plus-icon.svg", 1, "has-text-white"], [1, "task", 3, "ngClass", "click"], [1, "task-text"], [1, "task-buttons"], [1, "button", 3, "routerLink"], [1, "icon"], [1, "fas", "fa-edit"], [1, "button", "is-danger", 2, "margin-left", "10px", 3, "click"], [1, "fas", "fa-trash"], [1, "empty-state-text"]],
        template: function TaskViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " Lists ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, TaskViewComponent_a_6_Template, 3, 4, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "+ New List");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, TaskViewComponent_div_10_Template, 19, 5, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, TaskViewComponent_div_11_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.lists);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.tasks);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.tasks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #44ddd0, #27d7a1);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: 'Lato';\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.white-box[_ngcontent-%COMP%] {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px;\n}\n.task-manager-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  background: white;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.task-list-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 42px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.task-list-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n}\n.task-list-container[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin: 0;\n}\n.list-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n  background: #f8f8f8;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n  background-color: #cff8ef;\n  color: #006450;\n}\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  align-items: center;\n}\n.task[_ngcontent-%COMP%]:not(.complete) {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.task[_ngcontent-%COMP%]:not(.complete):active {\n  transform: scale(0.95);\n}\n.task[_ngcontent-%COMP%]:not(.complete):hover {\n  box-shadow: 0 0 0 5px #eeeeee;\n}\n.task[_ngcontent-%COMP%]:not(.complete):hover   .task-buttons[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.task.completed[_ngcontent-%COMP%]   .task-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.task[_ngcontent-%COMP%]   .task-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n.task[_ngcontent-%COMP%]   .task-buttons[_ngcontent-%COMP%] {\n  transition: opacity 0.2s, transform 0.2s;\n  opacity: 0;\n  transform: scale(0.85);\n}\n.circle-add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n.empty-state-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #777;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1haW4tc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGFzay12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLGtGQUFZO0FBMEJaO0VBQ0ksMkRBQTZEO0FDM0JqRTtBRDhCQTtFQUNJLFlBQVk7QUMzQmhCO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUMzQmhCO0FEOEJBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0FDM0JqQjtBRDhCQTtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQzNCdkI7QUQ4QkE7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQixZQUFZO0VBQ1osZ0JBQWdCO0FDNUJwQjtBQXJDQTtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUF3Q3JCO0FBckNBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUV0QixZQUFZO0VBQ1osaUJBQWlCO0VBRWpCLGFBQWE7RUFFYiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBcUNsQztBQWxDQTtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBRWIsNEJBQTRCO0VBQzVCLCtCQUErQjtBQW9DbkM7QUE1Q0E7RUFZUSxtQkFBbUI7RUFDbkIsYUFBYTtBQW9DckI7QUFqREE7RUFlWSxZQUFZO0VBQ1osU0FBUztBQXNDckI7QUFoQ0E7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0FBbUNoQjtBQXZDQTtFQU9RLGFBQWE7RUFFYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUVsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQWtDMUI7QUFqREE7RUFrQlksbUJEckRHO0FDd0ZmO0FBckRBO0VBc0JZLHlCQUF5QjtFQUN6QixjRDVEZ0I7QUMrRjVCO0FBOUJBO0VBQ0ksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixtQkFBbUI7QUFnQ3ZCO0FBdkNBO0VBVVEsZUFBZTtFQUNmLHFEQUFxRDtBQWlDN0Q7QUE1Q0E7RUFjWSxzQkFBc0I7QUFrQ2xDO0FBaERBO0VBa0JZLDZCQUE2QjtBQWtDekM7QUFwREE7RUFxQmdCLFVBQVU7RUFDVixtQkFBbUI7QUFtQ25DO0FBekRBO0VBNEJRLDZCQUE2QjtFQUM3QixZQUFZO0FBaUNwQjtBQTlEQTtFQWtDUSxhQUFhO0VBQ2IsWUFBWTtBQWdDcEI7QUFuRUE7RUF1Q1Esd0NBQXdDO0VBQ3hDLFVBQVU7RUFDVixzQkFBc0I7QUFnQzlCO0FBNUJBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUErQnRCO0FBM0JBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUE4QnRCIiwiZmlsZSI6InRhc2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgd2hlcmUgd2UgcHV0IGdsb2JhbCBzdHlsZXMgYW5kIGNoYW5nZSB2YXJpYWJsZSB2YWx1ZXNcclxuXHJcbi8vIEltcG9ydCBGb250cyAoTGF0byBhbmQgTnVuaXRvKVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMHxOdW5pdG86NDAwLDcwMCcpO1xyXG5cclxuJHR1cnF1b2lzZTogIzQ0ZGRkMDtcclxuJGdyZWVuOiAjMjdkN2ExO1xyXG4kbGlnaHQtZ3JlZW46ICM0NWY2OWU7IFxyXG4kZGFyay1ncmVlbjogcmdiKDAsIDEwMCwgODApO1xyXG5cclxuJGxpZ2h0OiAjZjhmOGY4O1xyXG5cclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJGdyZWVuO1xyXG5cclxuJGxpbms6ICR0dXJxdW9pc2U7XHJcblxyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcblxyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG5cclxuLy8gU2V0IGN1c3RvbSBnbG9iYWwgc3R5bGVzICh3aWxsIGJlIGFwcGxpZWQgdG8gd2hvbGUgYXBwKVxyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAkdHVycXVvaXNlLCAkZ3JlZW4pO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtYm94IHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4ud2hpdGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgXHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDBcIik7XG5odG1sIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgIzQ0ZGRkMCwgIzI3ZDdhMSk7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jZW50ZXJlZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2RhbC1ib3gge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTgwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLndoaXRlLWJveCB7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cblxuLnRhc2stbWFuYWdlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWF4LWhlaWdodDogNjgwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNDJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDQycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIC50b3AtYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhc2stbGlzdC1jb250YWluZXIgLnRvcC1iYXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubGlzdC1tZW51IC5saXN0LW1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmY4ZWY7XG4gIGNvbG9yOiAjMDA2NDUwO1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2s6bm90KC5jb21wbGV0ZSkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuXG4udGFzazpub3QoLmNvbXBsZXRlKTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4udGFzazpub3QoLmNvbXBsZXRlKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjZWVlZWVlO1xufVxuXG4udGFzazpub3QoLmNvbXBsZXRlKTpob3ZlciAudGFzay1idXR0b25zIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnRhc2suY29tcGxldGVkIC50YXNrLXRleHQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4udGFzayAudGFzay10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udGFzayAudGFzay1idXR0b25zIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbn1cblxuLmNpcmNsZS1hZGQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lbXB0eS1zdGF0ZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzc3NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\task-manager-mean-stack\frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6V8c":
    /*!**********************************************************!*\
      !*** ./src/app/pages/login-page/login-page.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginPageComponent */

    /***/
    function V8c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
        return LoginPageComponent;
      });
      /* harmony import */


      var src_app_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth.service */
      "ccyI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginPageComponent = /*#__PURE__*/function () {
        function LoginPageComponent(authService, router) {
          _classCallCheck(this, LoginPageComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(LoginPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLoginButtonClicked",
          value: function onLoginButtonClicked(email, password) {
            var _this4 = this;

            this.authService.login(email, password).subscribe(function (res) {
              if (res.status === 200) {
                // we have logged in successfully
                _this4.router.navigate(['/lists']);
              }

              console.log(res);
            });
          }
        }]);

        return LoginPageComponent;
      }();

      LoginPageComponent.??fac = function LoginPageComponent_Factory(t) {
        return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      LoginPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: LoginPageComponent,
        selectors: [["app-login-page"]],
        decls: 26,
        vars: 0,
        consts: [[1, "centered-content"], [1, "white-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "placeholder", "Email", 1, "input", "has-background-light"], ["emailInput", ""], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "control", "has-icons-left"], ["type", "password", "placeholder", "Password", 1, "input", "has-background-light"], ["pwInput", ""], [1, "fas", "fa-lock"], [1, "field", 2, "display", "flex", "justify-content", "flex-end"], [1, "control"], [1, "button", "is-success", "has-text-white", 3, "click"], [1, "has-text-grey"], ["routerLink", "/signup"]],
        template: function LoginPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function LoginPageComponent_Template_button_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](7);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](13);

              return ctx.onLoginButtonClicked(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Not got an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, " now!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "6XLR":
    /*!******************************************************!*\
      !*** ./src/app/pages/new-task/new-task.component.ts ***!
      \******************************************************/

    /*! exports provided: NewTaskComponent */

    /***/
    function XLR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function () {
        return NewTaskComponent;
      });
      /* harmony import */


      var src_app_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/task.service */
      "DK97");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewTaskComponent = /*#__PURE__*/function () {
        function NewTaskComponent(taskService, route, router) {
          _classCallCheck(this, NewTaskComponent);

          this.taskService = taskService;
          this.route = route;
          this.router = router;
        }

        _createClass(NewTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.params.subscribe(function (params) {
              _this5.listId = params['listId'];
            });
          }
        }, {
          key: "createTask",
          value: function createTask(title) {
            var _this6 = this;

            this.taskService.createTask(title, this.listId).subscribe(function (newTask) {
              _this6.router.navigate(['../'], {
                relativeTo: _this6.route
              });
            });
          }
        }]);

        return NewTaskComponent;
      }();

      NewTaskComponent.??fac = function NewTaskComponent_Factory(t) {
        return new (t || NewTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_0__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NewTaskComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: NewTaskComponent,
        selectors: [["app-new-task"]],
        decls: 13,
        vars: 0,
        consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter task name...", 1, "input", "has-background-light", "is-medium"], ["taskTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]],
        template: function NewTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Create a new task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NewTaskComponent_Template_button_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](5);

              return ctx.createTask(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdGFzay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DK97":
    /*!*********************************!*\
      !*** ./src/app/task.service.ts ***!
      \*********************************/

    /*! exports provided: TaskService */

    /***/
    function DK97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _web_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./web-request.service */
      "pQQl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(webReqService) {
          _classCallCheck(this, TaskService);

          this.webReqService = webReqService;
        }

        _createClass(TaskService, [{
          key: "getLists",
          value: function getLists() {
            return this.webReqService.get('lists');
          }
        }, {
          key: "createList",
          value: function createList(title) {
            // We want to send a web request to create a list
            return this.webReqService.post('lists', {
              title: title
            });
          }
        }, {
          key: "updateList",
          value: function updateList(id, title) {
            // We want to send a web request to update a list
            return this.webReqService.patch("lists/".concat(id), {
              title: title
            });
          }
        }, {
          key: "updateTask",
          value: function updateTask(listId, taskId, title) {
            // We want to send a web request to update a list
            return this.webReqService.patch("lists/".concat(listId, "/tasks/").concat(taskId), {
              title: title
            });
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(listId, taskId) {
            return this.webReqService["delete"]("lists/".concat(listId, "/tasks/").concat(taskId));
          }
        }, {
          key: "deleteList",
          value: function deleteList(id) {
            return this.webReqService["delete"]("lists/".concat(id));
          }
        }, {
          key: "getTasks",
          value: function getTasks(listId) {
            return this.webReqService.get("lists/".concat(listId, "/tasks"));
          } // getTask(listId: string, taskId: string) {
          //   return this.webReqService.get(`lists/${listId}/getTask/${taskId}`);
          // }

        }, {
          key: "createTask",
          value: function createTask(title, listId) {
            // We want to send a web request to create a task
            return this.webReqService.post("lists/".concat(listId, "/tasks"), {
              title: title
            });
          }
        }, {
          key: "complete",
          value: function complete(task) {
            return this.webReqService.patch("lists/".concat(task._listId, "/tasks/").concat(task._id), {
              completed: !task.completed
            });
          }
        }]);

        return TaskService;
      }();

      TaskService.??fac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_web_request_service__WEBPACK_IMPORTED_MODULE_0__["WebRequestService"]));
      };

      TaskService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: TaskService,
        factory: TaskService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "M1aA":
    /*!********************************************************!*\
      !*** ./src/app/pages/edit-list/edit-list.component.ts ***!
      \********************************************************/

    /*! exports provided: EditListComponent */

    /***/
    function M1aA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditListComponent", function () {
        return EditListComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/task.service */
      "DK97");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditListComponent = /*#__PURE__*/function () {
        function EditListComponent(route, taskService, router) {
          _classCallCheck(this, EditListComponent);

          this.route = route;
          this.taskService = taskService;
          this.router = router;
        }

        _createClass(EditListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.route.params.subscribe(function (params) {
              _this7.listId = params.listId;
              console.log(params.listId);
            });
          }
        }, {
          key: "updateList",
          value: function updateList(title) {
            var _this8 = this;

            this.taskService.updateList(this.listId, title).subscribe(function () {
              _this8.router.navigate(['/lists', _this8.listId]);
            });
          }
        }]);

        return EditListComponent;
      }();

      EditListComponent.??fac = function EditListComponent_Factory(t) {
        return new (t || EditListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      EditListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: EditListComponent,
        selectors: [["app-edit-list"]],
        decls: 13,
        vars: 0,
        consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter list name...", 1, "input", "has-background-light", "is-medium"], ["listTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]],
        template: function EditListComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Edit list ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function EditListComponent_Template_button_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](5);

              return ctx.updateList(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'frontend';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ThA2":
    /*!************************************************************!*\
      !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
      \************************************************************/

    /*! exports provided: SignupPageComponent */

    /***/
    function ThA2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function () {
        return SignupPageComponent;
      });
      /* harmony import */


      var src_app_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/auth.service */
      "ccyI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignupPageComponent = /*#__PURE__*/function () {
        function SignupPageComponent(authService, router) {
          _classCallCheck(this, SignupPageComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(SignupPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSignupButtonClicked",
          value: function onSignupButtonClicked(email, password) {
            var _this9 = this;

            this.authService.signup(email, password).subscribe(function (res) {
              console.log(res);

              _this9.router.navigate(['/lists']);
            });
          }
        }]);

        return SignupPageComponent;
      }();

      SignupPageComponent.??fac = function SignupPageComponent_Factory(t) {
        return new (t || SignupPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SignupPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: SignupPageComponent,
        selectors: [["app-signup-page"]],
        decls: 26,
        vars: 0,
        consts: [[1, "centered-content"], [1, "white-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "placeholder", "Email", 1, "input", "has-background-light"], ["emailInput", ""], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "control", "has-icons-left"], ["type", "password", "placeholder", "Password", 1, "input", "has-background-light"], ["pwInput", ""], [1, "fas", "fa-lock"], [1, "field", 2, "display", "flex", "justify-content", "flex-end"], [1, "control"], [1, "button", "is-success", "has-text-white", 3, "click"], [1, "has-text-grey"], ["routerLink", "/login"]],
        template: function SignupPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SignupPageComponent_Template_button_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](7);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](13);

              return ctx.onSignupButtonClicked(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Sign up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Already got an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](24, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, " now!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/task-view/task-view.component */
      "+4L4");
      /* harmony import */


      var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/new-list/new-list.component */
      "tPJF");
      /* harmony import */


      var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/new-task/new-task.component */
      "6XLR");
      /* harmony import */


      var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/login-page/login-page.component */
      "6V8c");
      /* harmony import */


      var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/signup-page/signup-page.component */
      "ThA2");
      /* harmony import */


      var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/edit-list/edit-list.component */
      "M1aA");
      /* harmony import */


      var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/edit-task/edit-task.component */
      "pnAd");
      /* harmony import */


      var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./web-req.interceptor */
      "oSNA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_11__["WebReqInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__["TaskViewComponent"], _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_5__["NewListComponent"], _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_6__["NewTaskComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_7__["LoginPageComponent"], _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_8__["SignupPageComponent"], _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_9__["EditListComponent"], _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_10__["EditTaskComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "ccyI":
    /*!*********************************!*\
      !*** ./src/app/auth.service.ts ***!
      \*********************************/

    /*! exports provided: AuthService */

    /***/
    function ccyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./web-request.service */
      "pQQl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(webService, router, http) {
          _classCallCheck(this, AuthService);

          this.webService = webService;
          this.router = router;
          this.http = http;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            var _this10 = this;

            return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              // the auth tokens will be in the header of this response
              _this10.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));

              console.log("LOGGED IN!");
            }));
          }
        }, {
          key: "signup",
          value: function signup(email, password) {
            var _this11 = this;

            return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              // the auth tokens will be in the header of this response
              _this11.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));

              console.log("Successfully signed up and now logged in!");
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.removeSession();
            this.router.navigate(['/login']);
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            return localStorage.getItem('x-access-token');
          }
        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            return localStorage.getItem('x-refresh-token');
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return localStorage.getItem('user-id');
          }
        }, {
          key: "setAccessToken",
          value: function setAccessToken(accessToken) {
            localStorage.setItem('x-access-token', accessToken);
          }
        }, {
          key: "setSession",
          value: function setSession(userId, accessToken, refreshToken) {
            localStorage.setItem('user-id', userId);
            localStorage.setItem('x-access-token', accessToken);
            localStorage.setItem('x-refresh-token', refreshToken);
          }
        }, {
          key: "removeSession",
          value: function removeSession() {
            localStorage.removeItem('user-id');
            localStorage.removeItem('x-access-token');
            localStorage.removeItem('x-refresh-token');
          }
        }, {
          key: "getNewAccessToken",
          value: function getNewAccessToken() {
            var _this12 = this;

            return this.http.get("".concat(this.webService.ROOT_URL, "/users/me/access-token"), {
              headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getUserId()
              },
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
              _this12.setAccessToken(res.headers.get('x-access-token'));
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.??fac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: AuthService,
        factory: AuthService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "oSNA":
    /*!****************************************!*\
      !*** ./src/app/web-req.interceptor.ts ***!
      \****************************************/

    /*! exports provided: WebReqInterceptor */

    /***/
    function oSNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function () {
        return WebReqInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "ccyI");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WebReqInterceptor = /*#__PURE__*/function () {
        function WebReqInterceptor(authService) {
          _classCallCheck(this, WebReqInterceptor);

          this.authService = authService;
          this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(WebReqInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this13 = this;

            // Handle the request
            request = this.addAuthHeader(request); // call next() and handle the response

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              console.log(error);

              if (error.status === 401) {
                // 401 error so we are unauthorized
                // refresh the access token
                return _this13.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                  request = _this13.addAuthHeader(request);
                  return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                  console.log(err);

                  _this13.authService.logout();

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
                }));
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }, {
          key: "refreshAccessToken",
          value: function refreshAccessToken() {
            var _this14 = this;

            if (this.refreshingAccessToken) {
              return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
                _this14.accessTokenRefreshed.subscribe(function () {
                  // this code will run when the access token has been refreshed
                  observer.next();
                  observer.complete();
                });
              });
            } else {
              this.refreshingAccessToken = true; // we want to call a method in the auth service to send a request to refresh the access token

              return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
                console.log("Access Token Refreshed!");
                _this14.refreshingAccessToken = false;

                _this14.accessTokenRefreshed.next();
              }));
            }
          }
        }, {
          key: "addAuthHeader",
          value: function addAuthHeader(request) {
            // get the access token
            var token = this.authService.getAccessToken();

            if (token) {
              // append the access token to the request header
              return request.clone({
                setHeaders: {
                  'x-access-token': token
                }
              });
            }

            return request;
          }
        }]);

        return WebReqInterceptor;
      }();

      WebReqInterceptor.??fac = function WebReqInterceptor_Factory(t) {
        return new (t || WebReqInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      WebReqInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: WebReqInterceptor,
        factory: WebReqInterceptor.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pQQl":
    /*!****************************************!*\
      !*** ./src/app/web-request.service.ts ***!
      \****************************************/

    /*! exports provided: WebRequestService */

    /***/
    function pQQl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebRequestService", function () {
        return WebRequestService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WebRequestService = /*#__PURE__*/function () {
        function WebRequestService(http) {
          _classCallCheck(this, WebRequestService);

          this.http = http;
          this.ROOT_URL = '';
        }

        _createClass(WebRequestService, [{
          key: "get",
          value: function get(uri) {
            return this.http.get("".concat(uri));
          }
        }, {
          key: "post",
          value: function post(uri, payload) {
            return this.http.post("".concat(uri), payload);
          }
        }, {
          key: "patch",
          value: function patch(uri, payload) {
            return this.http.patch("".concat(uri), payload);
          }
        }, {
          key: "delete",
          value: function _delete(uri) {
            return this.http["delete"]("".concat(uri));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            return this.http.post("users/login", {
              email: email,
              password: password
            }, {
              observe: 'response'
            });
          }
        }, {
          key: "signup",
          value: function signup(email, password) {
            return this.http.post("users", {
              email: email,
              password: password
            }, {
              observe: 'response'
            });
          }
        }]);

        return WebRequestService;
      }();

      WebRequestService.??fac = function WebRequestService_Factory(t) {
        return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      WebRequestService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: WebRequestService,
        factory: WebRequestService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "pnAd":
    /*!********************************************************!*\
      !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
      \********************************************************/

    /*! exports provided: EditTaskComponent */

    /***/
    function pnAd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function () {
        return EditTaskComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/task.service */
      "DK97");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EditTaskComponent = /*#__PURE__*/function () {
        function EditTaskComponent(route, taskService, router) {
          _classCallCheck(this, EditTaskComponent);

          this.route = route;
          this.taskService = taskService;
          this.router = router;
        }

        _createClass(EditTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.route.params.subscribe(function (params) {
              _this15.taskId = params.taskId;
              _this15.listId = params.listId;
            });
          }
        }, {
          key: "updateTask",
          value: function updateTask(title) {
            var _this16 = this;

            this.taskService.updateTask(this.listId, this.taskId, title).subscribe(function () {
              _this16.router.navigate(['/lists', _this16.listId]);
            });
          }
        }]);

        return EditTaskComponent;
      }();

      EditTaskComponent.??fac = function EditTaskComponent_Factory(t) {
        return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      EditTaskComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: EditTaskComponent,
        selectors: [["app-edit-task"]],
        decls: 13,
        vars: 0,
        consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter task name...", 1, "input", "has-background-light", "is-medium"], ["taskTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]],
        template: function EditTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Edit task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function EditTaskComponent_Template_button_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](5);

              return ctx.updateTask(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "tPJF":
    /*!******************************************************!*\
      !*** ./src/app/pages/new-list/new-list.component.ts ***!
      \******************************************************/

    /*! exports provided: NewListComponent */

    /***/
    function tPJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewListComponent", function () {
        return NewListComponent;
      });
      /* harmony import */


      var src_app_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/task.service */
      "DK97");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NewListComponent = /*#__PURE__*/function () {
        function NewListComponent(taskService, router) {
          _classCallCheck(this, NewListComponent);

          this.taskService = taskService;
          this.router = router;
        }

        _createClass(NewListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createList",
          value: function createList(title) {
            var _this17 = this;

            this.taskService.createList(title).subscribe(function (list) {
              console.log(list); // Now we navigate to /lists/task._id

              _this17.router.navigate(['/lists', list._id]);
            });
          }
        }]);

        return NewListComponent;
      }();

      NewListComponent.??fac = function NewListComponent_Factory(t) {
        return new (t || NewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_0__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NewListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: NewListComponent,
        selectors: [["app-new-list"]],
        decls: 13,
        vars: 0,
        consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], ["type", "text", "placeholder", "Enter list name...", 1, "input", "has-background-light", "is-medium"], ["listTitleInput", ""], [1, "buttons", "is-right"], ["routerLink", "/", 1, "button", "is-medium"], [1, "button", "is-primary", "has-text-white", "is-medium", 3, "click"]],
        template: function NewListComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Create a new list ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function NewListComponent_Template_button_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](5);

              return ctx.createList(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/task-view/task-view.component */
      "+4L4");
      /* harmony import */


      var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/new-list/new-list.component */
      "tPJF");
      /* harmony import */


      var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/new-task/new-task.component */
      "6XLR");
      /* harmony import */


      var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/login-page/login-page.component */
      "6V8c");
      /* harmony import */


      var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/signup-page/signup-page.component */
      "ThA2");
      /* harmony import */


      var _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/edit-list/edit-list.component */
      "M1aA");
      /* harmony import */


      var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/edit-task/edit-task.component */
      "pnAd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: '/lists',
        pathMatch: 'full'
      }, {
        path: 'new-list',
        component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_2__["NewListComponent"]
      }, {
        path: 'edit-list/:listId',
        component: _pages_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_6__["EditListComponent"]
      }, {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"]
      }, {
        path: 'signup',
        component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_5__["SignupPageComponent"]
      }, {
        path: 'lists',
        component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_1__["TaskViewComponent"]
      }, {
        path: 'lists/:listId',
        component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_1__["TaskViewComponent"]
      }, {
        path: 'lists/:listId/new-task',
        component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_3__["NewTaskComponent"]
      }, {
        path: 'lists/:listId/edit-task/:taskId',
        component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map