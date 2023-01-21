import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { CardsComponent } from "./pages/cards/cards.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";

const routes : Routes = [
    {path: "", component : LoginComponent},
    {path: "home", component : HomeComponent},
    {path: "cards", component : CardsComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}