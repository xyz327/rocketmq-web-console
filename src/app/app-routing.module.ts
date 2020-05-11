import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'cluster', loadChildren: () => import('./pages/cluster/cluster.module').then(m => m.ClusterModule) },
  { path: 'topic', loadChildren: () => import('./pages/topic/topic.module').then(m => m.TopicModule) },
  { path: 'producer', loadChildren: () => import('./pages/producer/producer.module').then(m => m.ProducerModule) },
  { path: 'consumer', loadChildren: () => import('./pages/consumer/consumer.module').then(m => m.ConsumerModule) },
  { path: 'message', loadChildren: () => import('./pages/message/message.module').then(m => m.MessageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
