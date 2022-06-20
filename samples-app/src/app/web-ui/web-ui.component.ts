import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './../app-config.service';

@Component({
  selector: 'app-web-ui',
  templateUrl: './web-ui.component.html',
  styleUrls: ['./web-ui.component.css']
})
export class WebUiComponent implements OnInit { 

  constructor(private appConfigService: AppConfigService) {}
  ngOnInit(): void {}
    // Set variables from overriden config.
    TOMCAT_LDAP_LOGIN = this.appConfigService.TOMCAT_LDAP_LOGIN
    TOMCAT_LDAP_PASSWORD = this.appConfigService.TOMCAT_LDAP_PASSWORD
    TOMCAT_LDAP_URL = this.appConfigService.TOMCAT_LDAP_URL
    dev_stack_service_module_smtp_host = this.appConfigService.dev_stack_service_module_smtp_host
    dev_stack_service_module_environment_type = this.appConfigService.dev_stack_service_module_environment_type
    dev_stack_service_module_environment_site = this.appConfigService.dev_stack_service_module_environment_site
    dev_stack_service_module_portalFrontendUrl = this.appConfigService.dev_stack_service_module_portalFrontendUrl
    resource_security_driverProperties_url = this.appConfigService.resource_security_driverProperties_url
    resource_lunar_central_driverProperties_url = this.appConfigService.resource_lunar_central_driverProperties_url
    resource_swingmgr_driverProperties_url = this.appConfigService.resource_swingmgr_driverProperties_url
    resource_dev_stack_driverProperties_url = this.appConfigService.resource_dev_stack_driverProperties_url
}
