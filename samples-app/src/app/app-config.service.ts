import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;

  constructor(private http: HttpClient) {}

  loadAppConfig() {
    return this.http.get('./../assets/config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  get TOMCAT_LDAP_LOGIN() { return this.appConfig["1.0.0"].tomcat.TOMCAT_LDAP_LOGIN;}
  get TOMCAT_LDAP_PASSWORD() { return this.appConfig["1.0.0"].tomcat.TOMCAT_LDAP_PASSWORD;}
  get TOMCAT_LDAP_URL() { return this.appConfig["1.0.0"].tomcat.TOMCAT_LDAP_URL;}
  get dev_stack_service_module_smtp_host() { return this.appConfig["1.0.0"]["dev-stack"]["dev-stack-service-module.smtp-host"];}
  get dev_stack_service_module_environment_type() { return this.appConfig["1.0.0"]["dev-stack"]["dev-stack-service-module.environment-type"];}
  get dev_stack_service_module_environment_site() { return this.appConfig["1.0.0"]["dev-stack"]["dev-stack-service-module.environment-site"];}
  get dev_stack_service_module_portalFrontendUrl() { return this.appConfig["1.0.0"]["dev-stack"]["dev-stack-service-module.portalFrontendUrl"];}
  get resource_security_driverProperties_url() { return this.appConfig["1.0.0"].databases["resource.security.driverProperties.url"];}
  get resource_lunar_central_driverProperties_url() { return this.appConfig["1.0.0"].databases["resource.lunar_central.driverProperties.url"];}
  get resource_swingmgr_driverProperties_url() { return this.appConfig["1.0.0"].databases["resource.swingmgr.driverProperties.url"];}
  get resource_dev_stack_driverProperties_url() { return this.appConfig["1.0.0"].databases["resource.dev_stack.driverProperties.url"];}


}