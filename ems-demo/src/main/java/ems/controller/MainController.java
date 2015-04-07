package ems.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	private Log log = LogFactory.getLog(this.getClass());
	
	@RequestMapping("/")
	public String index(Model model) {
		log.debug("Entering : /");
		
		model.addAttribute("indexPage", true);
		
		return "index";
	}
}
