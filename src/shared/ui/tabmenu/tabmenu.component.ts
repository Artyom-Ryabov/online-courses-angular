import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef,
  inject
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'ui-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.scss', './tabmenu.properties.scss', '../styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabmenuComponent implements OnInit {
  @ContentChildren(TabDirective) tabs!: QueryList<TabDirective>;

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  headers: string[] = [];

  private cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    setTimeout(() => {
      this.headers = this.tabs.map(tab => tab.header);
      this.select(this.tabs.first.header);
      this.cd.detectChanges();
    });
  }

  select(header: string): void {
    const tabTemplate = this.tabs.find(tab => tab.header === header)?.template;

    if (tabTemplate == null) {
      return;
    }

    this.container.clear();
    this.container.createEmbeddedView(tabTemplate);
  }
}

