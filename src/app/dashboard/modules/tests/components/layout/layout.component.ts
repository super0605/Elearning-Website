import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaConf } from '@app/core/confs';

@Component({
    selector: 'el-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit
{
    areaTitle: string;
    area_conf = new AreaConf();

    constructor(private route: ActivatedRoute)
    {
    }

    ngOnInit()
    {
        const params = this.route.snapshot.params;

        if (params.areaTitle)
        {
            this.areaTitle = params.areaTitle;
        }
    }
}
