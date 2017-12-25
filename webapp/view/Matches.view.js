sap.ui.jsview("table_football.view.Matches", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Matches
	 */
	getControllerName: function() {
		return "table_football.controller.Matches";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Matches
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: []
		});
		
		var oTable = new sap.m.Table("simpleTable",{
			headerToolbar : new sap.m.Toolbar({
				content: [new sap.m.Label({
					text:"Customer List"
				})]
			}),
		columns:[ new sap.m.Column({
			width: "2em",
			header : new sap.m.Label({
				text:"Match ID"
			})
		}),
		 new sap.m.Column({
			width: "2em",
			header : new sap.m.Label({
				text:"Score Team 1"
			})
		}),
		 new sap.m.Column({
			width: "2em",
			header : new sap.m.Label({
				text:"Team Details"
			})
		 }),
		 new sap.m.Column({
			width: "2em",
			header : new sap.m.Label({
				text:"Score Team 2"
			})
			}),
		 new sap.m.Column({
			width: "2em",
			header : new sap.m.Label({
				text:"Team Details"
			})
		})]
		});
		
		var oTemplate = new sap.m.ColumnListItem({
			cells: [new sap.m.Text({
				text:"{Id}"
			}), new sap.m.Text({
				text:"{ScoreTeam1}"
			}), new sap.m.Text({
				text:"{TeamDetails/PlayerName1} {TeamDetails/PlayerLname1}  {TeamDetails/PlayerName2} {TeamDetails/PlayerLname2}"
			}), new sap.m.Text({
				text:"{ScoreTeam2}"
			}), new sap.m.Text({
				text:"{TeamDetails2/PlayerName1} {TeamDetails1/PlayerLname1} {TeamDetails1/PlayerName2} {TeamDetails1/PlayerLname2}"
			})
			]});
		
		oTable.bindItems({ path:"/Matches", parameters:{expand : "TeamDetails,TeamDetails1"},template:oTemplate });
		
		
		oPage.addContent(oTable);

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});